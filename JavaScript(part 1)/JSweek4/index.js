/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let copyCollection = [].slice.call(arguments);
    let finalMass=arguments[0]
}

/**
 * @params {String[]}
 */
function select() {

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
