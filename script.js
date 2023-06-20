// values and variables
console.log("hello world!");

let firstname = "donald";

console.log(firstname);

//variable naming conventions
let last_name2 = "john";
let $function = 50;

console.log($function);
console.log(last_name2);

//data types

/*
 javascripht has 8 datatypes
 1. strings
 2. number
 3. bigint
 4. boolean
 5. undefined
 6. null
 7. symbol
 8. object
 */

// 1.Booleans-->True or False
let javaScriptIsEasy = true;
var lifeisHard = false

console.log(typeof javaScriptIsEasy);
console.log(typeof lifeisHard)

// 2.Number
donaldAge = 150;
nonsoAge = 90;

console.log(typeof donaldAge)

// 3. strings
let message = "Welcome to Dubai"
console.log(typeof message)

let divine = "24"
console.log(typeof divine)

let henry = "24" + 2;
console.log(typeof henry)

// 4. undefined
let year;
console.log(year);
console.log(typeof year);

// an empty value has nothing to do with undefined
let david = "";
console.log(typeof david)

// value is undefined, type is undefined
let car = undefined;
console.log(typeof car)

// when adding a number and a string, javascript will treat the number as a string
let vehicle = 16 + 4 + "volvo"
console.log(vehicle)

/* 5. null
in javascript null is nothing. it is supposed to be something that doesn't exist the data type of null is an object
*/

let prisca = null;
console.log(typeof prisca)

/**
 * difference between undefined and null
 * typof undefined is undefined
 * typeof null is object
 */

// undefined and null are equal in value
console.log(null == undefined);

//************ let, const and var ***************/

/* the let keyword was introduced in ES6 (2015)
**Rules**
1. let cannot be redeclared
2. let must be declared before use
3. let has block scope
*/

// 1. let cannot be redeclared
let ugo = "ugochukwu";
// let ugo = "Kodex student"; -> cannot be redeclared


// var can be redeclared
var kels = "kodex student";
var kels = "laravel developer"

console.log(kels)


// block scope
// let has block scope
{
    let job = 5;
}
// console.log(job);


// var does not have block scope
{
    var animal = "lion";
}
console.log(animal);


var macbook = 10;
{
    var macbook = 200;
}

console.log(macbook)


//
let windows = 5;
{
    let windows = 9000;
}
console.log(windows);


/* hoisting -> tou can use the variable before it is declared
-----let and const are not hoisted ----------*/
linux = "ubunut"
var linux



/* the const keyword

/* the const keyword was introduced in ES6 (2015)
**Rules**
1. const cannot be reassigned
2. const cannot be redeclared
3. let has block scope
*/

// const cannot be reassigned
const costfromtempsitetoKodex = 150;
costfromtempsitetoKodex = 100;
console.log(costfromtempsitetoKodex)

/**
 * always declare a variable with const when you know that the value should not be change
 */