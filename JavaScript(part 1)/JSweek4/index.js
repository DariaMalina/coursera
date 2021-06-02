/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */


function query(collection) {
    let copyCollection = [].slice.call(arguments);
    let copyArr = makeCopyOfArray(copyCollection);
    let copyArrayCheck = makeCopyOfArray(copyCollection)// нужен для дальнейшей проверки с помощью фильтр, так как не будет никак изменяться
    if (copyCollection.length === 1) {
        return collection
    } else {
        let prevArray = [];
        for (let i = 1; i < copyCollection.length; i++) {
            prevArray.push(copyCollection[i]);
        }
        let massFilter = prevArray.filter(el => el[0] === 'filterIn')
        let massSelect = prevArray.filter(el => el[0] === 'select')
        prevArray = massFilter.concat(massSelect)
        for (let i = 0; i < prevArray.length; i++) {
            let elem = prevArray[i]
            if (elem[0] === 'select') {
                copyArr = transformArray(copyArr, elem[1])//не забыть вернуть значение
            }
            if (elem[0] === 'filterIn') {
                copyArr = filterArray(copyArr, copyArrayCheck, elem[1], elem[2])//не забыть вернуть значение
            }

        }
        return copyArr
    }
}

/**
 * @params {String[]}
 */
function select() {
    let fields = [].slice.call(arguments);
    return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    let fields = [].slice.call(arguments);
    return ['filterIn', property, values];
}

function makeCopyOfArray(array) {
    let copyArray = []
    for (let i = 0; i < array[0].length; i++) {
        copyArray.push(array[0][i]) //теперь у нас имеется копия массива из коллекции
    }
    return copyArray
}

function transformArray(arr, fields) {//работает с select
    let keyList = fields//тут мы получаем массив со списком ключей, которые надо оставить
    return arr.map((curr) => {
        let elemMass = arr[0]
        for (let i = 0; i < keyList.length; i++) {
            let obj = {}// новый пустой объект, куда мы будет добавлять пару ключ значение, которая нам подходит
            for (let i = 0; i < keyList.length; i++) {
                let keys = keyList[i];
                if (elemMass.hasOwnProperty(keys)) {
                    obj[keys] = curr[keys]//на данной строчке мы добавляем пару в объект
                }

            }
            return obj
        }
    })

}

function filterArray(arr, checkArray, property, values) {
    let key = property;
    let keyValue = values;
    let doneFavFruit = checkArray.filter(function (el) {
        for (let i = 0; i < keyValue.length; i++) {
            if ( el[key] === keyValue[i]){
                return true
            }
        }return false
    })
    return arr.filter(function (el) {
        for (let i = 0; i < doneFavFruit.length; i++) {
            if (doneFavFruit[i].name === el.name) {
                return true
            }
        }
        return false
    })

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
