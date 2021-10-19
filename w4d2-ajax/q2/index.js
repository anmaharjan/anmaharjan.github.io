const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'view', 'css')));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get('/', (req, res) => {
    res.render('magic8');
});

app.get('/ask', (req, res) => {
    const ans = {answer: chooseRandom()};
    res.write(JSON.stringify(ans));
    res.status(200);
    res.end();
});

function chooseRandom(){
    // get random numbers below the length of answers
    let rand = Math.floor(Math.random() * answers.length);
    return answers[rand];
}

app.listen(3000, () => console.log("Server started at 3000."))