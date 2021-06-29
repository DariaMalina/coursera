
/**
 * Конструктор коллекции
 * @constructor
 */
class Collection {
    constructor() {
        this.date = []
    }

    static from(arr) {
        return arr.reduce((collection, curr) => {
                collection.append(curr);
                return collection;
            },
            new Collection()
        );
    }

    values() {
        return this.date
    }

    at(num) {
        if (this.date[num - 1] !== undefined) {
            return this.date[num - 1]
        }
        return null
    }

    append(elem) {
        if (elem instanceof Collection) {
            this.date = this.date.concat(elem.date)
        } else {
            this.date.push(elem)
        }

    }

    count() {
        return this.date.length
    }

    removeAt(num) {
        if (this.date[num - 1] === undefined) {
            return false
        }
        this.date = this.date.filter((el, i, arr) => {
            return i !== num - 1;

        })
        return true


    }}
module.exports = Collection;
