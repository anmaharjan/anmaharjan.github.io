const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("form", {title: "Index"});
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    let msg = 'Welcome ';
    if (!name) {
        name = "person";
    }
    msg += name;

    if(age){
        msg += `. Your age is ${age}.`;
    }
    res.render("result", {title: "Result", msg: msg});
});

app.listen(3000, () => console.log('App is running in 3000 port.'));