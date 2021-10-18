const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Product = require('./model/Product');
const Cart = require('./model/Cart');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, '/css')));

/* ---------- Product Lists ----------*/
let productList = [];

//create product objects for the list "productsList"
let hp = new Product(1, "HP", 400, "4gb RAM, 500gb ssd");
let lenovo = new Product(2, "Lenovo", 700, "12gb RAM, 1tb ssd");
let dell = new Product(3,"Dell", 300, "2gb RAM, 500gb hdd");
let apple = new Product(4, "Apple", 999, "16gb RAM, 256gb ssd");

productList.push(hp);
productList.push(lenovo);
productList.push(dell);
productList.push(apple);

app.get('/', (req, res) => {
    res.render('shop', {title: "Electronic Shop",
        highlight: "Welcome!! Customer is always right.", productList: productList });
});

app.get('/product/:id', (req, res) => {
    let prod = productList.filter((p) =>  p.getId() === parseInt(req.params.id))[0];
    res.render('product', {title: prod.getName(), highlight: 'Product Details of ' + prod.getName(),
        product: prod});
});

/* ---------- Cart Lists ----------*/
let cartList = [];

app.get('/cart', (req, res) => {
    let totalAmount = cartList.reduce((sum, cart) => cart.getTotalCost() + sum, 0);
    res.render('cart', {title: 'Cart', highlight: "Your shopping cart.",
        cartList: cartList, totalAmount: totalAmount});
});

app.post('/addToCart', (req, res) => {
    let prodId = req.body.prodId;
    let prodCount = req.body.prodCount;

    addOrUpdateCartList(prodId, prodCount);
    res.redirect('/cart');
});

app.post('/updateCart', (req, res) => {
    let prodId = req.body.prodId;
    let prodCount = req.body.prodCount;

    addOrUpdateCartList(prodId, prodCount);
    res.redirect('/cart');
});

function addOrUpdateCartList(prodId, prodCount){
    let isPresent = cartList.filter(li => li.getProduct().getId() === parseInt(prodId));
    if(isPresent.length > 0){
        for(let i=0; i<cartList.length; i++){
            if(cartList[i].getProduct().getId() === parseInt(prodId)){
                cartList[i].addCount(prodCount);
                cartList[i].updateTotalCost();
            }
        }
    }
    else{
        let prod = productList.filter((p) =>  p.getId() === parseInt(prodId))[0];
        cartList.push(new Cart(prod, prodCount, prod.getPrice() * prodCount));
    }
}

app.listen(3000, () => console.log("App is running at 3000 port"));