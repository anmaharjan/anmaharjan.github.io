/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers */
// ES6 Sum Function
const sum = function (arr){
    return arr.reduce((prevValue, currValue) => prevValue + currValue);
};

// ES6 Multiply Function
const multiply = function (arr){
    return arr.reduce((prevValue, currValue) => prevValue * currValue);
};

/* 5 Define a function reverse() that computes the reversal of a string. */
const reverses = function (st){
    return st.split("").map((_, ind, arr) => arr[arr.length - 1 - ind]).join("");
};

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
const filterLongWords = function (arr, i){
    return arr.filter(word => word.length > i);
}