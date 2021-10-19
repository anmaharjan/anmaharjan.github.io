class Cart {
    constructor(product, count, totalCost) {
        this.product = product;
        this.count = count;
        this.totalCost = totalCost;
    }

    getProduct() {
        return this.product;
    }

    getCount() {
        return this.count;
    }

    addCount(c){
        this.count = parseInt(this.count) + parseInt(c);
    }

    getTotalCost() {
        return this.totalCost;
    }

    updateTotalCost(){
        this.totalCost = this.count * this.product.getPrice();
    }
}
module.exports = Cart;