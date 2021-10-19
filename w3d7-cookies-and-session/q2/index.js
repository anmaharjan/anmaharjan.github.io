const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'maharishi yogic flyer'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'))

// dynamic style
const date = new Date();
let cssStyleFile = (date.getHours() >= 6 && date.getHours() <= 18)? "day" : "night";

app.get('/', (req, res) => {
    res.render('form', {sessions: session, cssStyleFile: cssStyleFile});
});

app.get('/result', (req, res) => {
    res.render('result', {name: req.session.name!==undefined?req.session.name:'person',
        age:req.session.age!==undefined?req.session.age:'', cssStyleFile: cssStyleFile});
});
app.post('/', (req, res) => {
    let name = req.body.name, age = req.body.age;
    req.session['name'] = name;
    req.session['age'] = age;

    res.redirect(303, '/result');
});

app.listen(3000, () => console.log("App started at 3000"));