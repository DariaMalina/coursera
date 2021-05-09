/**
 * @param {String} date
 * @returns {Object}
 */
let datet;
let daTe;
let mass;
let obj = {};
module.exports = function (date) {
    datet = date.match(/\d+/g);
    daTe = new Date(datet[0], datet[1]-1, datet[2], datet[3], datet[4]);
    mass = ['years', 'months', 'days', 'hours', 'minutes'];
    obj = {
        value: `${daTe.getFullYear()}-${daTe.getMonth()}-${daTe.getDate()} ${daTe.getHours()}:${daTe.getMinutes()}`,
        add: function (n, who) {
            for (let i = 0; i < datet.length; i++) {
                for (let a = 0; a < mass.length; a++) {
                    if (n > 0 && who === mass[a]) {
                        if (who === mass[0]) {
                            daTe.setFullYear(daTe.getFullYear() + n)
                        } else if (who === mass[1]) {
                            daTe.setMonth(daTe.getMonth() + n)
                        } else if (who === mass[2]) {
                            daTe.setDate(daTe.getDate() + n)
                        } else if (who === mass[3]) {
                            daTe.setHours(daTe.getHours() + n);
                        } else if (who === mass[4]) {
                            daTe.setMinutes(daTe.getMinutes() + n)
                        }

                        let months = daTe.getMonth()+1;
                        let days = daTe.getDate();
                        let hours = daTe.getHours();
                        let minutes = daTe.getMinutes();
                        if (daTe.getMonth() < 10) {
                            months = '0' + months;
                        }
                        if (daTe.getDate() < 10) {
                            days = '0' + days;
                        }
                        if (daTe.getHours() < 10) {
                            hours = '0' + hours
                        }
                        if (daTe.getMinutes() < 10) {
                            minutes = '0' + minutes
                        }
                        obj.value = `${daTe.getFullYear()}-${months}-${days} ${hours}:${minutes}`
                        return this
                    }
                }
                throw new TypeError()
            }

        },
        subtract: function (n, who) {

            for (let i = 0; i < datet.length; i++) {
                for (let a = 0; a < mass.length; a++) {
                    if (n > 0 && who === mass[a]) {

                        if (who === mass[0]) {
                            daTe.setFullYear(daTe.getFullYear() - n);
                        } else if (who === mass[1]) {
                            daTe.setMonth(daTe.getMonth() - n)
                        } else if (who === mass[2]) {
                            daTe.setDate(daTe.getDate() - n)
                        } else if (who === mass[3]) {
                            daTe.setHours(daTe.getHours() - n)
                        } else if (who === mass[4]) {
                            daTe.setMinutes(daTe.getMinutes() - n)
                        }
                        let months = daTe.getMonth()+1;
                        let days = daTe.getDate();
                        let hours = daTe.getHours();
                        let minutes = daTe.getMinutes();
                        if (daTe.getMonth() < 10) {
                            months = '0' + months;
                        }
                        if (daTe.getDate() < 10) {
                            days = '0' + days;
                        }
                        if (daTe.getHours() < 10) {
                            hours = '0' + hours
                        }
                        if (daTe.getMinutes() < 10) {
                            minutes = '0' + minutes
                        }
                        obj.value = `${daTe.getFullYear()}-${months}-${days} ${hours}:${minutes}`
                        return this
                    }
                }
                throw new TypeError()
            }
        }
    }
    return obj;
};
