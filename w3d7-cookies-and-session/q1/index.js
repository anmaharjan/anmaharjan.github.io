const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    let cookies = req.cookies;
    res.render('index', {cookies: cookies});
});

app.post('/addCookie', (req, res) => {
    let key = req.body.key, value = req.body.value;
    res.cookie(key, value, {maxAge: 1000*60*60*24*7});
    res.redirect(303, '/');
});

app.listen('3000', () => console.log("App started at 3000"));