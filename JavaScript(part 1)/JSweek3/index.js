/**
 * @param {String} date
 * @returns {Object}
 */
let datet;
let daTe;
let mass;
let obj = {};

function z(number) {
    if (number < 10) {
        return '0' + number
    } else {
        return number
    }
}

function doneString(date) {

    return `${date.getFullYear()}-${z(date.getMonth() + 1)}-${z(date.getDate())} ${z(date.getHours())}:${z(date.getMinutes())}`
}

function masOk(word, mass) {
    return mass.includes(word);
}

module.exports = function (date) {

    datet = date.match(/\d+/g);
    daTe = new Date(datet[0], datet[1] - 1, datet[2], datet[3], datet[4]);
    mass = ['years', 'months', 'days', 'hours', 'minutes'];

    obj = {
        get value() {
            return doneString(daTe)
        },
        add: function (n, who) {
            for (let i = 0; i < datet.length; i++) {

                if (n > 0 && masOk(who, mass)) {
                    switch (who) {
                        case mass[0] :
                            daTe.setFullYear(daTe.getFullYear() + n);
                            break
                        case mass[1]:
                            daTe.setMonth(daTe.getMonth() + n);
                            break;
                        case mass[2]:
                            daTe.setDate(daTe.getDate() + n)
                            break;
                        case mass[3]:
                            daTe.setHours(daTe.getHours() + n);
                            break;
                        case mass[4]:
                            daTe.setMinutes(daTe.getMinutes() + n);
                            break;
                    }
                    return this
                }
                throw new TypeError()
            }
        },
        subtract: function (n, who) {

            for (let i = 0; i < datet.length; i++) {

                if (n > 0 && masOk(who, mass)) {

                    switch (who) {
                        case mass[0] :
                            daTe.setFullYear(daTe.getFullYear() - n);
                            break
                        case mass[1]:
                            daTe.setMonth(daTe.getMonth() - n);
                            break;
                        case mass[2]:
                            daTe.setDate(daTe.getDate() - n)
                            break;
                        case mass[3]:
                            daTe.setHours(daTe.getHours() - n);
                            break;
                        case mass[4]:
                            daTe.setMinutes(daTe.getMinutes() - n);
                            break;
                    }
                    return this
                }
                throw new TypeError()
            }
        }
    }
    return obj;
};
