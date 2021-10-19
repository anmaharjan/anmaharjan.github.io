const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const Product = require('./model/Product');
const Cart = require('./model/Cart');

const app = express();
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'maharishi yogic flyer'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

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
app.get('/cart', (req, res) => {
    let cartList = req.session.cartList!==undefined ? req.session.cartList : [];
    let totalAmount = cartList.reduce((sum, cart) => cart.totalCost + sum, 0);
    res.render('cart', {title: 'Cart', highlight: "Your shopping cart.",
        cartList: cartList, totalAmount: totalAmount});
});

app.post('/addToCart', (req, res) => {
    let data = JSON.parse(req.body.data);
    let prodId = data.prodId;
    let prodCount = data.prodCount;

    addOrUpdateCartList(req, prodId, prodCount);
    res.redirect('/cart');
});

app.post('/updateCart', (req, res) => {
    let prodId = req.body.prodId;
    let prodCount = req.body.prodCount;

    addOrUpdateCartList(req, prodId, prodCount);
    res.redirect('/cart');
});

function addOrUpdateCartList(req, prodId, prodCount){
    let cartList = req.session.cartList!==undefined ? req.session.cartList : [];
    let isPresent = cartList.filter(li => li.product.id === parseInt(prodId));
    if(isPresent.length > 0){
        for(let i=0; i<cartList.length; i++){
            if(cartList[i].product.id === parseInt(prodId)){
                cartList[i].count = parseInt(cartList[i].count) + parseInt(prodCount)
                cartList[i].totalCost = parseInt(cartList[i].count) * cartList[i].product.price;
            }
        }
    }
    else{
        let prod = productList.filter((p) =>  p.getId() === parseInt(prodId))[0];
        cartList.push(new Cart(prod, prodCount, prod.getPrice() * prodCount));
    }
    req.session.cartList = cartList;
}

app.listen(3000, () => console.log("App is running at 3000 port"));