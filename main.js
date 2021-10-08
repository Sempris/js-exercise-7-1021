// 13. Write a function named addDash that accepts a number as argument and insert dashes (-) between each two even numbers. 
//     Example :
//     addDash(254680) -> output : 254-6-8-0
//     addDash(1572453) -> output : 1572-453

function addDash(input) {
    let numArr = input.toString().split('');
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i - 1] % 2 == 0 && numArr[i] % 2 == 0) {
            numArr.splice(i, 0, '-');
        }
    }
    return numArr.join('');
}
console.log('---------- 1 ----------');
console.log(addDash(254680));

// 14. Write a function named freqElem that takes an array as an argument and finds the most frequent item of that array.
//     Example :
//     freqElem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) -> output : "a, 5 times" 

let freqElem = input => {
    let reserve = {};
    let max = input[0];
    let count = 1;
    for (i = 0; i < input.length; i++) {
        let item = input[i];
        reserve[item] == null ? reserve[item] = 1 : reserve[item]++;
        if (reserve[item] > count) {
            max = item;
            count = reserve[item];
        }
    }
    return `${max}, ${count} times`;
}
console.log('---------- 2 ----------');
console.log(freqElem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// 15. Write a function named changeCase that takes two arguments, first a string, second a callback function. 
// Callback function swaps the case of each character.  
//     Example :
//     changeCase('The Quick Brown Fox', callback) -> output : 'tHE qUICK bROWN fOX'

let callback = letter => letter == letter.toUpperCase() ? letter = letter.toLowerCase() : letter = letter.toUpperCase();
let changeCase = (isString, callback) => {
    let newString = '';
    for (let i = 0; i < isString.length; i++) {
        newString += callback(isString[i]);
    }
    return newString;
}
console.log(changeCase('The Quick Brown Fox', callback));

// 16. Write a function to sort the following array of objects by title value.
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        let x = a[key];
        let y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
console.log('---------- 4 ----------');
console.log(sortByKey(library, 'title'));

// 17. Create a function named createObject that takes two arrays as arguments. First array dishes should contain dish names,  and 
// second array calories should contain calorie values of dishes respectively.
// Convert given arrays into object, with key value pairs using the Array method "reduce" and return the object as the result of your function.

// Expected output : {
//     Hamburger: '253 kcal',
//     Cheeseburger: '302 kcal',
//     Filet-O-fish: '331 kcal',
//     McChicken: '384 kcal',
//     Big_Mac: '503 kcal',
//     McNuggets: '268 kcal'
// }

let dishes = ['Hamburger', 'Cheeseburger', 'Filet-O-fish', 'McChicken', 'Big_Mac', 'McNuggets'];
let calories = ['253 kcal', '302 kcal', '331 kcal', '384 kcal', '503 kcal', '268 kcal'];

let result = dishes.reduce((property, key, index) => ({ ...property, [key]: calories[index] }), {});
console.log('---------- 5 ----------');
console.log(result);

// 18. Write a JavaScript function named checkKey that takes two arguments, first an object, second a key property name.
//     It will check whether an object contains given property.
//     Example:
//     hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF"}, "green") --> output : true
//     hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF"}, "black") --> output : false

let hasKey = (input, check) => check in input;
console.log('---------- 6 ----------');
console.log(hasKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF", blue: "#0000FF" }, "green"));

// 19. Create a function named createCountry that takes an array of words as an argument and a string as a word suffix. 
// Use an array method, to add the suffix to the end of all words. It will return an array, and do not use loop to complete this task.
//     Example:
//     createCountry(['Fin', 'Ice', 'Thai', 'Po', 'Switzer'], 'land') --> output : ['Finland', 'Iceland', 'Thailand', 'Poland', 'Switzerland']

let createCountry = (input, suffix) => input.map(item => item + suffix);
console.log('---------- 7 ----------');
console.log(createCountry(['Fin', 'Ice', 'Thai', 'Po', 'Switzer'], 'land'));

// 20. Create a function named arrayOfMultiples that takes two numbers as arguments (num, length)
//     and returns an array of multiples of num until the array length reaches length.
//     Example:
//     arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
//     arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
//     arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

let arrayOfMultiples = (number, multiples) => {
    let newArr = [];
    for (i = 1; i <= multiples; i++) {
        newArr.push(number * [i]);
    }
    return newArr;
}
console.log('---------- 8 ----------');
console.log(arrayOfMultiples(12, 10));

// 21. Create a function named getTotalPrice that takes an array of objects (groceries) which calculates the total price and returns it as a number.
//     A grocery object has a product, a quantity and a price.
//     expected output : 10.7 

let groceries = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 },
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
];

let getTotalPrice = input => {
    let quantityArr = [];
    let priceArr = [];
    input.forEach(function (obj) {
        quantityArr.push(obj.quantity);
        priceArr.push(obj.price);
    });

    let countArr = quantityArr.map(function (num, index) {
        return num * priceArr[index];
    });

    let count = 0;
    for (let i in countArr) {
        count += countArr[i];
    }
    return count;
};

// let getTotalPrice = (arr) => {
//     return arr.reduce((total, item) => total + item.quantity * item.price, 0);
// }
// console.log(getTotalPrice(groceries));

console.log('---------- 9 ----------');
console.log(getTotalPrice(groceries));

// 22. Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
//     Example:
//     insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
//     insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
//     insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

let insertWhitespace = input => input.replace(/([A-Z])/g, ' $1').trim();
console.log('---------- 10 ----------');
console.log(insertWhitespace("TheGreatestUpsetInHistory"));