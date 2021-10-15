const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, '/css')));

// dynamic style
const date = new Date();
let style = "";
if(date.getHours() >= 6 && date.getHours() <= 18){
    style = "<link href='/css/day.css' rel='stylesheet'/>";
}
else{
    style = "<link src='/css/night.css' rel='stylesheet'/>";
}

app.get('/', (req, res) => {
    let html = "<!DOCTYPE html>" +
        "<html lang='en'>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<title>Node JS</title>" +
        style +
        "</head>" +
        "<body>" +
        "<form method='post' action='/result'>" +
        "<label>Name<input type='text' name='name'/></label>" +
        "<label>Age<input type='number' name='age'/></label>" +
        "<input type='submit' value='Submit Query'/>" +
        "</form>" +
        "</body>" +
        "</html>";
    res.send(html);
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

    let html = "<!DOCTYPE html>" +
        "<html lang='en'>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<title>Node JS</title>" +
        style +
        "</head>" +
        "<body>" +
        msg +
        "</body>" +
        "</html>";
    res.send(html);
});

app.listen(3000, () => console.log(`Server started at 3000 port`))