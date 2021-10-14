const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getNumber = (sum) => {
    readline.question('Enter a number : ', number => {
        sum = sum === undefined ? 0 : sum;
        if(number === 'stop'){
            readline.close();
            console.log("Sum of all the numbers = " + sum);
            return;
        }
        sum += parseInt(number);
        getNumber(sum);
    })

};

getNumber();