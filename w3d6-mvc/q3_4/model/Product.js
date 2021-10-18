class Product {
    constructor(id, name, price, description) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getPrice() {
        return this._price;
    }

    getDescription() {
        return this._description;
    }
}
module.exports = Product;