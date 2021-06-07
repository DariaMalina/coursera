module.exports = {
    eventList: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this.eventList.hasOwnProperty(event)) {
            this.eventList[event] = [{
                subscriber: subscriber,
                handler: handler.bind(subscriber)
            }]
            return this
        } else {
            this.eventList[event].push({
                subscriber,
                handler: handler.bind(subscriber)
            })
            return this
        }
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.eventList.hasOwnProperty(event)) {
            this.eventList[event] = this.eventList[event].filter(el => el.subscriber !== subscriber)
            return this
        }
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this.eventList.hasOwnProperty(event)) {
            this.eventList[event].forEach(el => el.handler())
            return this
        }
    }
};
