module.exports = {
    eventList: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (subscriber === undefined) {
            return this
        } else {
            if (!this.eventList.hasOwnProperty(event)) {
                this.eventList[event] = [{
                    subscriber: subscriber,
                    handler: handler.bind(subscriber)
                }]
                return this
            } else {
                this.eventList[event].push({
                    subscriber: subscriber,
                    handler: handler.bind(subscriber)
                })
                return this
            }
        }
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.eventList.hasOwnProperty(event)) {
            let mass = this.eventList[event]
            this.eventList[event] = mass.filter(el => el.subscriber !== subscriber)
            return this
        }
        return this
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this.eventList.hasOwnProperty(event)) {
            let mass = this.eventList[event]
            for (let i = 0; i < mass.length; i++) {
                mass[i].handler()
            }
            return this
        }
        return this
    }
};
