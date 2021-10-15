const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

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
app.listen(3000);