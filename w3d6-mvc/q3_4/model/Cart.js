class Cart {
    constructor(product, count, totalCost) {
        this._product = product;
        this._count = count;
        this._totalCost = totalCost;
    }

    getProduct() {
        return this._product;
    }

    getCount() {
        return this._count;
    }

    addCount(c){
        this._count = parseInt(this._count) + parseInt(c);
    }

    getTotalCost() {
        return this._totalCost;
    }

    updateTotalCost(){
        this._totalCost = this._count * this._product.getPrice();
    }
}
module.exports = Cart;