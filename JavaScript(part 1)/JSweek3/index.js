/**
 * @param {String} date
 * @returns {Object}
 */
let datet;
let daTe;
let mass;
let obj = {};
function z(number) {
    if (number<10){
        return '0'+number
    } else {return number }
}
function doneString(date) {
    let done='';
    done+=date.getFullYear();
    done+='-'
    done+=z(date.getMonth() + 1);
    done+='-'
    done+=z(date.getDate());
    done+=' '
    done+=z(date.getHours());
    done+=':'
    done+=z(date.getMinutes());
    return done
}
function masOk(word, mass){
    return mass.indexOf(word) !== -1;
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
                for (let a = 0; a < mass.length; a++) {
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
                }
                throw new TypeError()
            }

        },
        subtract: function (n, who) {

            for (let i = 0; i < datet.length; i++) {
                for (let a = 0; a < mass.length; a++) {
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
                }
                throw new TypeError()
            }
        }
    }
    return obj;
};
