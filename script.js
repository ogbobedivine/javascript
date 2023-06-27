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
// costfromtempsitetoKodex = 100;
console.log(costfromtempsitetoKodex)

/**
 * always declare a variable with const when you know that the value should not be change
 */


//************* basic operators**************/

// Math operators
const now = 2023;
const divineAge = now - 1990;
const davidAge = now - 1981;

console.log(divineAge, davidAge);

// multiplication, division and raise to power
console.log(divineAge * 2, divineAge / 10, 2 ** 3)

/**
 * create 2 variables
 * the datatype must be strings
 * concetenate (add) the two variables
 * and display the result in the console
 */

let first = "1";
let second = "2";

console.log(first);
console.log(typeof first);
console.log(second);
console.log(typeof second);

console.log(first + '' + second);


//********Assignment Operators(=) ***********/
let numberone = 10 + 15;
numberone += 5;
numberone = numberone + 5;
console.log(numberone)

let numbertwo = 2 + 7;
numbertwo *= 7;
// can be rewritten as:
numbertwo = numbertwo * 7;
console.log(numbertwo)

let numberthree = 1;
numberthree++;
// can be rewritten as:
numberthree = numberthree + 1
console.log(numberthree)

let numberfour = 4;
numberfour--;
// can be rewritten as:
numberfour = numberfour - 1;
console.log(numberfour)


//*******Comparison operators(>, <, >=, <=) **********/
let ugoage, olisaage;
ugoage = '35';
olisaage = 35;
console.log(ugoage == olisaage);

// *******operator precedence**********/
const yearNow = 2023;
const josephAge = yearNow - 1999;
const henryAge = yearNow - 1990;

console.log((josephAge + henryAge) * 10)

//***********coding challange -> javascript operators************* /


// exercise 1
let MarksWeight = "78"
let Marksheight = "1.69"
let JohnWeight = "92"
let Johnheight = "1.95"

// solution
let MarksBMI = MarksWeight / Marksheight ** 2;
console.log(MarksBMI)

let JohnBMI = JohnWeight / Johnheight ** 2;
console.log(JohnBMI)

console.log(MarksBMI > JohnBMI)

// exercise 2
let MarksWeight2 = "95"
let Marksheight2 = "1.88"
let JohnWeight2 = "85"
let Johnheight2 = "1.76"

// solution
let MarksBMI2 = MarksWeight2 / Marksheight2 ** 2;
console.log(MarksBMI2)

let JohnBMI2 = JohnWeight2 / Johnheight2 ** 2;
console.log(JohnBMI2)

console.log(MarksBMI2 > JohnBMI2)


// ********** strings and template literals*************/
const myName = 'donald';
const myJob = 'developer';
const yearofbirth = 1717;
const currentyear = 2017;

const donald = "I'm " + myName + ', a ' + (currentyear - yearofbirth) + ' year old ' + myJob + '!';
console.log(donald);

const newdonald = `I'm ${myName}, a ${currentyear - yearofbirth} year old ${myJob}!`;
console.log(newdonald);

console.log(`hello how are u doing`);

// console.log('this is \n\ 
// for multiple \n\
// lines');

console.log(`this
is
for multiple
lines`);

//******8 taking decision: if / else statements *********/

const kelsAge = 35;

// if statement only executes when the expression to true
if(kelsAge >= 18) {
    console.log(`kels is eligible to drink alchohol cos his age is ${kelsAge} `);
}

// else statement executes when the if statement returns false
else{
    const yearsleft = 18 - kelsAge;
    console.log(`kels is not eligible to drink alchohol. wait another ${yearsleft}`)
}

let dayOftheweek = "monday"

if (dayOftheweek == "monday") {
    console.log("sit at home")
}
else {
    console.log("write some code")
}


// coding challenge

let markBMI, johnBMI;
markBMI = 28.3;
johnBMI = 23.9;


if (markBMI > johnBMI) {
    console.log(`mark's BMI ${markBMI} is higher than john's BMI ${johnBMI}`)
}
else {
    console.log(`john BMI is higher than Marks Bmi`)
}

//***************** type coversion and coercion **************/
//type conversion is the process of conveerting a value from one type to another

const inputyear = '1999'
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 10);

console.log(Number('donald'))
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion
// Type coersion is when javascript coerces or changes a data type by itself

const sum = 35 + 'hello';
console.log(sum);

console.log('23' - '10' - 3)
console.log('24'/ '2')

let n = '1' + 1
n = n - 1;
console.log(n)








