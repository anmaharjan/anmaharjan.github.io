/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    const success = "TEST SUCCEEDED";
    const failure = "TEST FAILED.  Expected " + expected + " found " + found;

    // Checking for an array
    // will validate array even if order of items in both array is not same
    if(expected instanceof Array && found instanceof Array){
        if(expected.length !== found.length)
            return failure;

        let matches = true;
        for(let e of expected){
            if(!found.includes(e)){
                matches = false;
                break;
            }
        }
        return matches? success : failure;
    }
    // Checking for other data types
    else{
        if (expected === found) {
            return success;
        } else {
            return failure;
        }
    }
}

/* 1. Function to find max between two numbers */
const max = function (a, b){
    if(a > b)
        return a;
    else
        return b;
};

// Testing
console.log('\n');
console.log('----------------- Testing max() -----------------');
console.log("Expected output of max(55, 33) is 55", myFunctionTest(55, max(55, 33)));
console.log("Expected output of max(2, -3) is 2", myFunctionTest(2, max(2, -3)));

/* --------------------------------------------------------------------------------------- */

/* 2. Function to find max between three numbers */
const maxOfThree = function (a, b, c){
    if(a > b){
        if(a > c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b > c){
            return b;
        }
        else{
            return c;
        }
    }
};

// Testing
console.log('\n');
console.log('----------------- Testing maxOfThree() -----------------');
console.log("Expected output of maxOfThree(55, 33,88) is 88", myFunctionTest(88, maxOfThree(55, 33, 88)));
console.log("Expected output of maxOfThree(2, -3, -90) is 2", myFunctionTest(2, maxOfThree(2, -3, -90)));

/* --------------------------------------------------------------------------------------- */

/* 3. Function to validate a vowel */
const isVowel = function (s){
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return vowels.includes(s.toLowerCase());
};

// Testing
console.log('\n');
console.log('----------------- Testing isVowel() -----------------');
console.log("Expected output of isVowel(a) is true", myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel(y) is false", myFunctionTest(false, isVowel('y')));

/* --------------------------------------------------------------------------------------- */

/* 4. Function to declare sum and multiply all the numbers in an array of numbers. */
// ES6 Sum Function
const sum = function (arr){
    return arr.reduce((prevValue, currValue) => prevValue + currValue);
};

// ES6 Multiply Function
const multiply = function (arr){
    return arr.reduce((prevValue, currValue) => prevValue * currValue);
};

let arr1 = [1, 2, 3, 4]; // sum=10, multiply=24
let arr2 = [10, 20, 30, 40, 50]; // sum = 150, multiply=12000000

// Testing
console.log('\n');
console.log('----------------- Testing sum() -----------------');
console.log("Expected output of sum([1, 2, 3, 4]) is 10", myFunctionTest(10, sum(arr1)));
console.log("Expected output of sum([10, 20, 30, 40, 50]) is 150", myFunctionTest(150, sum(arr2)));

console.log('----------------- Testing multiply() -----------------');
console.log("Expected output of multiply([1, 2, 3, 4]) is 24", myFunctionTest(24, multiply(arr1)));
console.log("Expected output of multiply([10, 20, 30, 40, 50]) is 12000000", myFunctionTest(12000000, multiply(arr2)));

/* --------------------------------------------------------------------------------------- */

/* 5. Function to declare sum and multiply all the numbers in an array of numbers. */
const reverse = function (st){
    let revSt = '';

    for(let i=st.length-1; i>=0; i--){
        revSt += st[i];
    }
    return revSt;
};

// Testing
console.log('\n');
console.log('----------------- Testing reverse() -----------------');
console.log("Expected output of reverse('Javascript is awesome') is 'emosewa si tpircsavaJ'", myFunctionTest('emosewa si tpircsavaJ', reverse('Javascript is awesome')));
console.log("Expected output of reverse('Google is god') is 'dog si elgooG'", myFunctionTest('dog si elgooG', reverse('Google is god')));

/* --------------------------------------------------------------------------------------- */

/* 6. Function to find the longest word in an array and return its length. */
const findLongestWord = function (arr){
    let longest = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest;
}

// Testing
console.log('\n');
console.log('----------------- Testing findLongestWord() -----------------');
console.log("Expected output of findLongestWord(['Maharishi', 'International', 'University']) is 13", myFunctionTest(13, findLongestWord(['Maharishi', 'International', 'University'])));
console.log("Expected output of findLongestWord(['a', 'bb', 'ccc', 'dddd', 'eeeee']) is 5", myFunctionTest(5, findLongestWord(['a', 'bb', 'ccc', 'dddd', 'eeeee'])));

/* --------------------------------------------------------------------------------------- */

/* 7. Function to filter the longest word in an array. */
const filterLongWords = function (arr, i){
    return arr.filter(word => word.length > i);
}

// Testing
console.log('\n');
console.log('----------------- Testing findLongestWord() [Order of an item doesn\'t matter]-----------------');
console.log("Expected output of filterLongWords(['Maharishi', 'International', 'University']) is ['International']", myFunctionTest(['International'], filterLongWords(['Maharishi', 'International', 'University'], 10)));
console.log("Expected output of filterLongWords(['a', 'bb', 'ccc', 'dddd', 'eeeee']) is ['eeeee', 'dddd', 'ccc']", myFunctionTest(['eeeee', 'dddd', 'ccc'], filterLongWords(['a', 'bb', 'ccc', 'dddd', 'eeeee'], 2)));

/* --------------------------------------------------------------------------------------- */

/* 8. Modifying the jsfiddle on the map/filter/reduce slide. */
document.writeln("<br/><br/><br/>Modifying the JSFiddle code<br/><br/>");

const a = [1,3,5,3,3];

const b = a.map(function(elem, i, array) {
    return elem * 10;
})
document.writeln(b.toString() + "<br/>");

const c = a.filter(function(elem, i, array){
    return elem === 3;});
document.writeln(c.toString() + "<br/>");

const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);
