/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */


function query(collection) {
    let copyCollection = [].slice.call(arguments);
    let copyArr = makeCopyOfArray(copyCollection);
    let copyArrayCheck = makeCopyOfArray(copyCollection)// нужен для дальнейшей проверки с помощью фильтр, так как не будет никак изменяться
    for (let i = 1; i < copyCollection.length; i++) {
        let prevArray = copyCollection[i];
        if (prevArray[0] === 'select') {
          copyArr=transformArray(copyArr,prevArray[1])//не забыть вернуть значение

        }
        if (prevArray[0] === 'filterIn') {
            copyArr=filterArray(copyArr, copyArrayCheck,prevArray[1],prevArray[2])//не забыть вернуть значение

        }

    }
    return copyArr
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
function transformArray(arr,fields) {//работает с select
    let keyList = fields//тут мы получаем массив со списком ключей, которые надо оставить
    return arr.map((curr)=> {
        for (let i = 0; i < keyList.length; i++) {
            let obj={}// новый пустой объект, куда мы будет добавлять пару ключ значение, которая нам подходит
            for (let i = 0; i < keyList.length; i++) {
                let keys=keyList[i];
                obj[keys]=curr[keys]//на данной строчке мы добавляем пару в объект
            }
            return obj}
    })

}
function filterArray(arr, checkArray,property, values) {
    let key = property;
    let keyValue = values;
    let doneFavFruit = checkArray.filter(function (el) {
        for (let i = 0; i < keyValue.length; i++) {
            if ( el[key] === keyValue[i]){
                return true
            }
        }return false
    })
    let results = []
    for (let i = 0; i < doneFavFruit.length; i++) {
        results.push(arr.filter(el=>
            doneFavFruit[i].name === el.name
        ))
    }
    return results.flat()
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
