/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
function promisify(fun) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function next(err, result) {
                if (err === null) {
                    resolve(result)
                } else {
                    return reject(err)
                }
            }

            args.push(next);
            fun(...args)
        })
    }
}

function parallelExecution(arrayOfOperations, callback) {
    let arr = []
    for (let i = 0; i < arrayOfOperations.length; i++) {
        let dateCallFunction = promisify(arrayOfOperations[i])
        arr.push(dateCallFunction())
    }
    return Promise.all(arr).then(data => callback(null, data)).catch(err => callback(err))
}
module.exports = (operations, callback) => {
    if (operations.length >= 1) {
        return parallelExecution(operations, callback)
    }
    return callback(null, [])
};
//каждый эелмент оператион это функция некст
