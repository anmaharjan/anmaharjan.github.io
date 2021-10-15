const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("<form method='post' action='/result'>" +
        "<label>Name<input type='text' name='name'/></label>" +
        "<label>Age<input type='number' name='age'/></label>" +
        "<input type='submit' value='Submit Query'/>" +
        "</form>");
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
        msg += `. Your age is ${age}`;
    }
    res.send(msg);
});

app.listen(3000, () => console.log('App is running in 3000 port.'));