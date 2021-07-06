/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = (operations, callback) => {
    if (operations.length < 1) {
        return callback(operations)
    } else {

        function promise(ar) {
            let l = new Promise((resolve, reject) => {
                let array = []
                let counter = 0

                function pushArr(value, i) {
                    array[i] = value;
                    counter += 1
                    if (counter === operations.length) {
                        resolve(array)
                    }
                }

                for (let i = 0; i < operations.length; i++) {
                    operations[i].then(val => {
                        pushArr(val, i)
                    }).catch(err => reject(err))
                }
            })
            return l.then(data => callback(null, data)).catch(err => callback(err))
        }

        return promise(operations)
    }
};
//каждый эелмент оператион это функция некст
