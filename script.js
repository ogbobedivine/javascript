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
if (kelsAge >= 18) {
    console.log(`kels is eligible to drink alchohol cos his age is ${kelsAge} `);
}

// else statement executes when the if statement returns false
else {
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
console.log('24' / '2')

let n = '1' + 1
n = n - 1;
console.log(n);

//**************************** truthy and falsy values ****************/
//we have five falssy values: 0, '', undefined, null, nan

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;

if (money) {
    console.log('go on a spree!')
}
else {
    console.log('dont spend the money')
}

let product = 0;
if (product) {
    console.log('stay home')
}
else {
    console.log('go on a shopping spree')
}

//*******************8 logical operators ******************/
//* logical operators are used to determine the logic between variables or values 
// && is the AND operator
// || is the OR operator
// !is the NOT operator


const hasDriverslicense = true;
const hasGoodvision = false;
const isTired = false

console.log(hasDriverslicense && hasGoodvision);
console.log(hasDriverslicense || hasGoodvision);
console.log(!hasDriverslicense);


if (hasDriverslicense && hasGoodvision) {
    console.log('nonso is eligible to drive')
}
else {
    console.log('someone else should drive')
}

if (hasDriverslicense && hasGoodvision || isTired) {
    console.log('nonso is eligible to drive')
}
else {
    console.log('someone else should drive')
}

if (hasDriverslicense || hasGoodvision) {
    console.log('nonso is eligible to drive')
}
else {
    console.log('someone else should drive')
}

if (!hasDriverslicense || hasGoodvision) {
    console.log('nonso is eligible to drive')
}
else {
    console.log('someone else should drive')
}

// coding challenge 3

// 1
const manchesterAverage = (96 + 108 + 89) / 3;
const barcelonaAverage = (88 + 91 + 110) / 3;

console.log(manchesterAverage, barcelonaAverage);

// 2
if (manchesterAverage > barcelonaAverage) {
    console.log('manchester wins the trophy')
}
else if (manchesterAverage < barcelonaAverage) {
    console.log('barcelona wins the trophy')
}
else if (manchesterAverage === barcelonaAverage) {
    console.log("its a draw! both teams wins")
}

// 3
const manchesterAverage2 = (97 + 112 + 101) / 3;
const barcelonaAverage2 = (109 + 95 + 123) / 3;

if (manchesterAverage2 > barcelonaAverage2 && manchesterAverage2 >= 100) {
    console.log('manchester wins the trophy')
}
else if (barcelonaAverage2 > manchesterAverage2 && barcelonaAverage2 >= 100) {
    console.log('barcelona wins the trophy')
}
else if (manchesterAverage2 === barcelonaAverage2 && manchesterAverage2 >= 100) {
    console.log('both wins the trophy')
}
else {
    console.log('No one wins')
}

//************************ the switch statement***************** */
// const day = "tuesday"

// switch (day) {
//     case 'monday':
//         console.log('sit at home');
//         break;
//     case 'tuesday':
//         console.log('go for javascript class');
//         break;
//     case 'wednesday':
//         console.log('go to gym');
//         break;
//     case 'thusday':
//     case 'friday':
//         console.log('bake some cake');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('write some code');
//         break;
//     default:
//         console.log('dont do anything')

// }

//************ using if statement in switch statement */
const day = 'monday'
if (day === 'monday') {
    console.log('sit at home')
}
else if (day === 'tuesday') {
    console.log('go to javascript class')
}
else if (day === 'wednesday') {
    console.log('go to gym')
}
else if (day === 'thurday' || day === 'friday') {
    console.log('bake some cake')
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('cook beans')
}
else {
    console.log('dont do anything')
}

//************ the ternary operator*********/

// if (age >= 18) {
//     console.log('i love alcohol')
// }
// else {
//     console.log('i like capri sun')
// }
// or
const age = 24;
age >= 18 ? console.log('i love alcohol') : console.log('i like capri sun')

// coding challenge 4
const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);



//************************ functions ********************* */
function sayHiToDonald() {
    console.log('my name is donald. say hi')
}

// in order  for the function to be used it has to be invoked / called
sayHiToDonald();

function getfruitname(item1, item2) {
    const juice = `friut salad is made with ${item1} and ${item2}`
    return juice;
}
const friutsalad = getfruitname('cabbage', 'carrot')
console.log(friutsalad);

//  or

console.log(getfruitname('eggs', 'milk'));
console.log(getfruitname('paw paw', 'peanut'))


//*********************** function declearation and function expressions ******** */

// function declaration
function calculateage(birthyear) {
    return 2023 - birthyear
}
console.log(calculateage(1998))

// function expressions
// let a = b + c

const calculateage1 = function (birthyear) {
    return 2023 - birthyear
}

console.log(calculateage1(1989))

//*************************** arrow functions**************** */

const calculateage2 = birthyear => 2023 - birthyear
console.log(calculateage2(1717))

const yearsuntilretirement = (birthyear, firstname) => {
    const age = 2023 - birthyear;
    const retirement = 60 - age;
    return `${firstname} retires in ${retirement} years`
}

console.log(yearsuntilretirement(1965, 'donald'));
console.log(yearsuntilretirement(2006, 'nonso'));


// ****************function calling other functions*************
function cutfriutpieces(friut) {
    return friut * 4;
}

function fruitprocessor(item1, item2) {
    const item1pieces = cutfriutpieces(item1);
    const item2pieces = cutfriutpieces(item2);

    const juice = `juice is made with ${item1pieces} and ${item2pieces} pieces of bananas`;
    return juice
}
console.log(fruitprocessor(3, 2))

// ********************* reviewing functions **********************

const calculateage3 = birthyear => 2023 - birthyear
console.log(calculateage2(1717))

const yearsuntilretirement2 = (birthyear, firstname) => {
    const age = 2023 - birthyear;
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement
    }
    else {
        console.log(`${firstname} has already retires`)
        return -1
    } 
}

console.log(yearsuntilretirement2(1965, 'donald'));
console.log(yearsuntilretirement2(1945, 'nonso'));


// coding challenge 6 ~ fuction

// task 1

const calcaverage = (a, b, c) => (a + b + c) / 3;

// task 2
let scoremanchester = calcaverage(44, 23, 71);
let scorebarcelona = calcaverage(65, 54, 49);
console.log(scoremanchester, scorebarcelona)

// task 3
const checkwinner = function (avgbarcelona, avgmanchester) {
    if (avgmanchester >= 2 * avgbarcelona) {
        console.log(`manchester wins ❤️‍🔥 (${avgmanchester} vs ${avgbarcelona})`)
    }
    else if (avgbarcelona >= 2 * avgmanchester){
        console.log(`barcelona wins ❤️‍🔥 (${avgbarcelona}
            vs ${avgmanchester})`)
    }
    else {
        console.log(`nobody won `)
    }
}

// taks 4



//******************************** introduction to arrays **************** */
let student1, student2, student3;
student1 = 'donald';
student2 = 'somto';
student3 = 'micheal'

// method 1
const friends = ['ugo', 'prisca', 'david', 'divine'];
console.log(friends);
console.log(friends[1])
console.log(friends.length)

friends[1] = 'donald';
console.log(friends)

// method 2
// const people = new Array('joseph', 'donald', 23, 81)
// console.log(people)


const findage = function (birthyear){
    return 2023 - birthyear
}
const years = [1990, 1965, 1914, 1945, 2000]

const age1 = findage(years[0]);
const age2 = findage(years[1]);
const age3 = findage(years[years.length - 1]);

console.log(age1, age2, age3)

//****************** */ array methods ************************************
const newfreinds = ['ugo', 'prisca', 'henry', 'divine', 'david']

// Appends new elements to the end of an array, and returns the new length of the array.
const newlenth = newfreinds.push('donald');
console.log(newfreinds);
console.log(newlenth)

// Inserts new elements at the start of an array, and returns the new length of the array.
newfreinds.unshift('kels');
console.log(newfreinds)

// Removes the last element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.
newfreinds.pop();
console.log(newfreinds)

// Removes the first element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.
newfreinds.shift;
console.log(newfreinds)

// Returns the index of the first occurrence of a value in an array, or - 1 if it is not present.
console.log(newfreinds.indexOf('divine'))

// Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(newfreinds.includes('henry'))

if (newfreinds.includes('divine')) {
    console.log('he is a senior dev')
}
else {
    console.log('he still de learn work')
}

