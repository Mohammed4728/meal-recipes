"use strict"; // enable strict mode
/* =========== Where To Put The Code ========= */
// alert("hello js");

/* =========== comments ========= */
// single line comment
/*
    multi line comment
    second line
    third line
*/
/* ========== outputting screens ========== */
// alert("hello js"); // alert box
// console.log("hello js"); // console log
// document.write("hello js from file"); // deprecated
// console.error ("this is an error"); // error message
// console.warn ("this is a warning"); // warning message
// console.log("hello %cjs", "color:red; font-size:40px");
// console.table(['html', 'css', 'js']);

/* ========== data types ========== */
/* ========== Primitive Types and Reference Types ========== */
//Primitive Types: is not an object [boolean, number , string, bigint, symbol, null, undefined]
//Reference Types: reference type is an object [array, object, function]

/*
  Data Types:
  - String
  - Number
  - Boolean
  - Array => Object
  - Object => Object
*/
/*
console.log(typeof "hello js"); // string
console.log(typeof 1424242); // number

console.log(typeof 236653.99); // number
console.log(typeof true); // boolean
console.log(typeof [1, 2, 3]); // object
console.log(typeof {'name': 'ahmed', 'age': 30}); // object
console.log(typeof function() {}); // function
console.log(typeof undefined); // undefined
console.log(typeof null); // object
var x = BigInt(1234567890123456789012345678901234567890);
console.log(typeof x); // bigint
var y = Symbol("js");
console.log(typeof y); // symbol
*/
/* ============ declaring variables ======== */

// var email = "mohamed@mail.com"
// console.log(email);
// var age = 30;
// console.log(age);
// var isAdmin = true;
// console.log(isAdmin);

/* ========== Identifiers & naming Conventions ========== */
/*
var name = "ahmed"; // valid
var AGE = 25; // valid
var userName = "mo"; // valid
var user_name = "sayed"; // valid
var UserName = "ali"; // valid
var $username = "osama"; // valid
var $username$ = "osama"; // valid
var _name_ = "test"; // valid
var USER_NAME = "test"; // valid
var user1 = "user"; // valid
*/

// invalid variable names examples:
/*
var user-name = "sayed"; // invalid
var 1user = "sayed"; // invalid
var my age = 30; // invalid\
var var = "test"; // invalid
var #user = "test"; // invalid
*/

/*
var userName = "ahmed"; // camel case "will use this"
var user_name = "sayed";
var USER_NAME = "test";
*/

/* ========= let & var & const =========== */
/*
var : 
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Window Scope  [Added To Window]
    - working for global and block scope
    - didn't for functional scope (ReferenceError)
    - While var  be declared without being initialized,
let : 
    - Redeclare (give Error)
    - Access Before Declare (Error)
    - Variable Window Scope  [didn't Added To Window]
    - working for global 
    - didn't for block scope (ReferenceError)
    - didn't work for functional scope (ReferenceError)
    - While let  be declared without being initialized,
    const :
    - Redeclare (give Error)
    - Access Before Declare (Error)
    - Variable Window Scope  [didn't Added To Window]
    - working for global and give error for local scope
    - const must be initialized during declaration.
*/

// var username = "ahmed Emad";
// var username = "sayed"; // re-declaration allowed
// console.log(username);

// let userAge = 30;
// let userAge = 30;
// console.log(userAge);

// const pi = 3.14;
// const pi = 3.145;
// console.log(pi);

// console.log(userName); // undefined
// var userName = "ahmed";

// console.log(userName);
// let userName = "ahmed";

// console.log(userName);
// const userName = "ahmed";

// var username = "sayed";
// let userAge = 30;
// const pi = 3.14;
// console.log(userAge);
// console.log(username);
// console.log(pi);
// console.log(window);

// const test = 1; // global variable

// // { } block scope / function scope / local scope
// function checkTest() {
// // const test = 2; // local variable
//  console.log('inner test from checkTest', test);
// }

// checkTest();

// if (true) {
//     const greeting = "say Hello 2";
//     // console.log(greeting); // "say Hello 2"
// }
// console.log(greeting); // "say Hi"

// const age;
// console.log(age); // undefined

/* ========== TDZ ========== */
// TDZ (temporal dead zone) :
/*
is the time between the creation of a variable and its initialization. (can't be accessed)
- js is knowing X is existing 
- but it isn't initialized yet
- it will give you an error accessing it before initialization
*/
// console.log(x);
// let x = 10;

// NOT TDZ Example:
// console.log(x); // undefined
// var x = 10;
/* ========== Javascript Modes ========== */
// Non-Strict Mode (default)
/*
function test (a,a) {
  a = 20;
  console.log(a);
}
test();
*/
/*
x =10;
console.log(x);
*/

// Strict Mode

/*
Uncaught SyntaxError: Duplicate parameter name not allowed in this context
*/
// function test (a,a) {
//   a = 20;
//   console.log(a);
// }
// test();

/*
Uncaught ReferenceError: x is not defined
*/
// x =10;
// console.log(x);

/* ========== String  & Characters Escape Sequences ========== */
// console.log("hello js"); // double quotes
// console.log('hello js');

// console.log("hello "js" "); // error
// console.log("hello 'js' "); // hello 'js'
// console.log('hello "js" ');

//Escape Sequences:
// console.log('hello \'js\' '); // hello 'js'
// console.log("hello \"js\" "); // hello "js"');

// console.log('hello\
//      emad \
//     \ test ');

// console.log('hello \n emad \n test ');

/* ========== Concatenation ========== */
// let firstName = "ahmed";
// let lastName = "sayed";

// console.log(firstName + "    " + lastName); // ahmed sayed

/* ========== Template Literals Represented at Es6 ========== */
// let a = "Hello";
// let b = "Admin";
// let c = "This is your";
// let d = "Dashboard";

// console.log( a + " " + b +  " "  + c + " " + d);
// console.log(`${a}  "  ${b}   "
//   '${c} '

//     ${d}`);

// let markup = `
//     <div class="card">
//         <h2>${a}</h2>
//         <p>${c} </p>
//     </div>
// `;

/* ========== Arithmetic Operators ========== */
/*
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]

  ++a  =>> pre 
  a++  ==> post 
*/

//  console.log(10 + 20); // 30
// console.log(10 - 5); // 5
// console.log(10 * 3); // 30
// console.log(10 / 2); // 5
// console.log(2 ** 4); // 16
// console.log(10 % 3); // 1
// let num = 10;
// console.log(++num); // 11
// console.log(num); // 11

// console.log(num++); // 10
// console.log(num); // 11

// console.log(10 + "20"); // 1020
// console.log(10 + "test"); // 10test
// console.log(10 - "test"); // NaN
// console.log(typeof NaN); // number

/* ======== Unary & Negation ============ */
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary minus [Return Number If Its Not Number + Negates It]

*/
/*
console.log(+100); // 100
console.log(10 + +"20"); // 30
console.log(+"-100"); // -100
console.log(-"-100"); // 100
console.log(+"test"); // NaN
console.log(+"15.5");
console.log(+null);
console.log(+false);
console.log(+true);

console.log(+"100");
console.log(Number("100"));
*/

/* ========== Type Casting ========== */
/*
   Type Casting
  - +
  - -
  - "" - 2
  - false - true
*/
// let a = "100";
// let b = 20;
// let c = true;

// console.log(a + b); // 10020
// console.log(b + c) // 21
// console.log(a + b + c); // 10020true

// console.log(+a + b + c); // 120

/* ========== Assignment Operators ========== */
// let a = 10;
// console.log(a);
// a = a + 20;
// console.log(a);

//  a+= 20;
//  console.log(a);

//  a-= 20;
//  console.log(a);

//  a*= 20;
//  console.log(a);

//  a/= 20;
//  console.log(a);

/* =========== Number & its methods========= */
// let x = 200;
// console.log(x)

// console.log(1000000) // 1000000
// console.log(1_000_000) // 1000000
// console.log(1e6) // 1000000
// console.log(10 ** 6) // 1000000
// console.log(10 * 10 * 10 * 10 * 10 * 10 * 10) // 1000000

// let bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);

// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 837373736363636);
// console.log(Number.MAX_SAFE_INTEGER);

/*
 Number Methods:
 - toString()
 - toFixed()
 - Number()
 - parseInt()
 - parseFloat()
*/
/*
let x = 100;
console.log(x.toString()); // "100"
console.log((7367366).toString());
console.log((55.78).toString());
*/

// console.log((10.456789).toFixed(0)); // "10"
// console.log((10.456689).toFixed(3));

// console.log(parseInt("100")) // 100
// console.log(parseInt("100 test")) // 100
// console.log(parseInt("test 100 test")) //  NaN
// console.log(parseInt(222.555)); // 222

// console.log(parseFloat(222.555)); // 222.555
// console.log(parseFloat("100.3883 test")) //  100.3883
// console.log(parseFloat("test 100.3883 test"))  //  NaN

// console.log(Number("100")) // 100
// console.log(Number("100 test")) // NaN
// console.log(Number.isInteger(100)); // true
// console.log(Number.isInteger(100.837)); // false

// Not A Number (NaN)
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN(NaN)); // true

/*
  Math Object Methods:
  - Math.round()
  - Math.ceil()
  - Math.floor()
  - Math.min()
  - Math.max()
  - Math.random()
  - Math.pow()
  - Math.sqrt()
  - Math.abs()
  - Math.trunc() // ES6
*/
// console.log(Math.round(99.2)); // 99
// console.log(Math.round(99.5)); // 100

// console.log(Math.ceil(99.2)); // 100
// console.log(Math.floor(99.2)); // 99
// console.log(Math.floor(99.6)); // 99

// console.log(Math.min(10, 20, -100, 50, 0)); // -100
// console.log(Math.max(10, 20, -100, 50, 0)); // 50

// console.log(Math.random()); // random number between 0 to 1

// console.log(Math.pow(2, 4)); // 16
// console.log(Math.sqrt(16)); // 4
// console.log(Math.abs(-500)); // 500
// console.log(Math.trunc(99.9)); // 99

/* =========== String & its methods========= */
/*
 String Methods:
 - .length
 - access characters by index
 - charAt()
 - trim()
 - toUpperCase()
  - toLowerCase()
*/
// let userName = "EmadTest"; // [E,m,a,d,T,e,s,t]
// [E,m,a,d,T,e,s,t]
// [0,1,2,3,4,5,6,7]
// " Emad Test ";
// ['',E,m,a,d,'',T,e,s,t,'']

// console.log(userName.length); // 8
// console.log(userName[0]) // E
// console.log(userName[1]) // m
// console.log(userName.charAt(7)) // t

// console.log(userName[0]) // ' '
// console.log(userName.length);
// console.log(userName.trim().length) //8

// console.log(userName.toUpperCase()); // EMADTEST
// console.log(userName.toLowerCase()); // emadtest

// console.log(userName.trim().charAt(2).toUpperCase()); // A

// console.log(userName.toLocaleUpperCase());

/*
let num = 1234567.89;
// console.log(num.toString());
console.log(num.toLocaleString('de-DE')); // 1.234.567,89
console.log(num.toLocaleString('en-US')); // 1,234,567.89
console.log(num.toLocaleString('ar-EG')); // ١٬٢٣٤٬٥٦٧٫٨٩
/*
toString : Method - object & primitives - Not Safe for all types (null)  
String: global Function - any value - is Safe for all types
*/
// console.log(num.toString())
// console.log(String(num))

// let myString = "Hello Test for Me Test";
/*
  -  indexOf(searchString: string "Mandatory", position?: number)
  - lastIndexOf(searchString: string "Mandatory", position?: number)
  - slice(start?: number | undefined, end?: number | undefined) end (n-1)     
  - repeat (count: number)
  - split (separator: string | RegExp, limit?: number)
  - substring (start: number, end?: number)
  - concat (...strings: string[])
  - endsWith(searchString: string, position?: number)
  - startsWith(searchString: string, position?: number)
  - includes(searchString: string, position?: number)
  - replace (searchValue: string | RegExp, replaceValue: string)
  - replaceAll(searchValue: string | RegExp, replaceValue: string)
  - trim()
  - trimStart()
  - trimEnd()

  */
// "Hello Test for Me"
// [H,e,l,l,o, ,T,e,s,t, ,f,o,r, ,M,e]
// [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

// console.log(myString.indexOf("Test")) // 6
// console.log(myString.indexOf("Test", 10)) // -1

// console.log(myString.lastIndexOf("Test")); // 18
// console.log(myString.lastIndexOf("Test", 10))

// console.log(myString.slice()); // "Hello Test for Me Test"
// console.log(myString.slice(2,6)); // "llo " (2,n-1) (2,5)
// console.log(myString.slice(-2));// "st"

// console.log(myString.repeat(3));// "Hello Test for Me TestHello Test for Me TestHello Test for Me Test"

// console.log(myString.split(" ")); // ["Hello", "Test", "for", "Me", "Test"]
// console.log(myString.split(" ", 4));

// console.log(myString.substring(2,6)); // "llo " (n-1) (2,5)

// console.log(myString.concat(" - ", "Nice to see you")); // "Hello Test for Me Test - Nice to see you"

// console.log(myString.endsWith('Test')); // true
// console.log(myString.startsWith('Hello')); // true
// console.log(myString.includes('for')); // true

// console.log(myString.replace('Test', 'Checked')); // Hello Checked for Me Test
// console.log(myString.replaceAll('Test', 'Checked')); // Hello Checked for Me Checked

/* ========== Comparison Operators ========== */
/*
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/
/*
console.log(10 == "10"); // true
console.log(10 != "10"); // false

console.log(10 === "10"); // false // Identical for both value & type 
console.log(10 !== "10"); // true

console.log(10 > 5); // true
console.log(10 >= 10); // true

console.log(5 < 10); // true
console.log(5 <= 5); // true

console.log(typeof "test"); // string
console.log(typeof "hello"); // string

console.log(typeof "test" === typeof "hello"); // true
*/

/* =========== Logical Operators ========= */
/*
&& : AND
|| : OR
! : NOT
*/
// let a = true;
// let b = false;

// console.log(a && b); // false
// console.log(a && true); // true
// console.log(b && false); // false

// console.log(a || b); // true
// console.log(a || true); // true
// console.log(b || false); // false

// console.log(!a); // false
// console.log(!b); // true
// console.log(!true); // false
// console.log(!false); // true

/*
let x = 5,
  y = 10,
  z = 15;

console.log(x < y && y < z); // true
console.log(x < y || y < z);
console.log(!(x < y));
console.log(false && x < y);
*/
/* ========== Control Flow with if ========== */
// let age = 25;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

/*
let score = 75;

if(score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
*/

// let side1 = 10;
// let side2 = 5;
// let side3 = 8;

// if (side1 === side2 && side2 === side3) {
//   console.log("Equilateral Triangle");
// } else if (side1 === side2 && side2 !== side3) {
//   console.log("Isosceles Triangle");
// } else {
//   console.log("Scalene Triangle");
// }
/* ========== Nested If Conditions ========== */
// let age = 20;

// if (age < 13) {
//   console.log("Child");
// } else if (age >= 13 && age < 20) {
//   console.log("Teenager");
// } else {
//     if (age >= 20 && age < 30) {
//       console.log("Young Adult");
//     } else if (age >= 30 && age < 50) {
//       console.log("Adult");
//     } else {
//       console.log("Senior");
//     }
// }

// let age = 20;
// if (age >= 13) console.log("Child");
/* ========== Conditional (Ternary) Operator ========== */
// condition ? expressionIfTrue : expressionIfFalse;
//  let age = 20;
// let canDrive = (age >= 18) ? "Yes can Drive" : "No can't Drive";
// console.log(canDrive);

// let score = 75;
// let grade = (score >= 90) ? "A" :
//             (score >= 80) ? "B" :
//             (score >= 70) ? "C" :
//             (score >= 60) ? "D" : "F";
// console.log(grade);

/* =========== Nullish Operator & Logical Or ========= */
// Nullish Coalescing Operator (??) : null or undefined

// let userName = undefined;
// let displayName = userName ?? "Guest User";
// console.log(`Hello Mr/ ${displayName}`);

// Logical OR Operator (||) : falsy values (false, 0, "", null, undefined, NaN)

// let userAge = 0;
// let defaultAge = userAge || "unknown age";
// console.log(`Your age is ${defaultAge}`);
/* ========== Switch Statement ========== */
/*

switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  // Add more cases as needed
  default:
    // Code to execute if none of the cases match
}
*/
/*
let day = 13;
let dayName = "";

switch (day) {
  case 1:
    dayName = "Saturday";
    break;
  case 2:
    dayName = "Sunday";
    break;
  case 3:
    dayName = "Monday";
    break;
  case 4:
    dayName = "Tuesday";
    break;
  case 5:
    dayName = "Wednesday";
    break;
  case 6:
    dayName = "Thursday";
    break;

  default:
    dayName = "Friday";
}
 console.log(dayName);
 */

/* ============ array ======== */
// let studentName = "mohamed";
// ['m','o','h','a','m','e','d']
// ['0','1','2','3 [0,1]','4']
// ['0','1','2','3 [0,1,2]','4']

/*
let students = ["Hossam", "sayed", "ahmed", ["mohamed", "hussine",['Mona','Soha']], "ali"];
// ['0','1','2','3 [0,1]','4']
console.log(students);
console.log(students.length); // 5
console.log(`Hello ${students[0]}`); // Hello Hossam
console.log(`Hello ${students[1]}`); // Hello sayed
console.log(`Hello ${students[5]}`); // Hello undefined
console.log(`--------------------------------------`);
console.log(`Hello ${students[3]}`);

console.log(`Hello ${students[3][0]}`);
console.log(`Hello ${students[3][1]}`);
console.log(`--------------------------------------`);
students[1] = "Emad";
console.log(students.length);
console.log(students);
console.log(`--------------------------------------`);
console.log(`Hello ${students[3][2][1]}`); // Hello Soha
console.log(students.length);
console.log(`--------------------------------------`);
console.log(typeof students); // object
console.log(Array.isArray(students)); // true
console.log(`--------------------------------------`);
console.log(`--------------------------------------`);

let friends = ["Emad", "Ali", "Mena"];

friends[3] = "Sayed";
friends[4] = "Ahmed";
// [0,1,2,3,4]



// friends[friends.length-1] = "Hossam"; // friends[5] = "Hossam"
// friends[friends.length] = "Hossam"
friends[friends.length-1] = "Hossam";
console.log(`All friends : ${friends}`);
console.log(`array length is ${friends.length}`);
*/

// Array Methods:
/*
  push(): Adds one or more elements to the end of an array.
  pop(): Removes the last element from an array.
  shift(): Removes the first element from an array.
  unshift(): Adds one or more elements to the beginning of an array.
  splice(start, deleteCount, ...items): Adds/removes elements from an array.
  reverse(): Reverses the order of the elements in an array.
  sort(compareFunction): Sorts the elements of an array.
  copyWithin(target, start, end): Copies a sequence of elements within the array to a new position within the same array.
  join(separator): Joins all elements of an array into a string.
  toString(): Converts an array to a string.
  findIndex(callback, thisArg): Returns the index of the first element that satisfies the provided testing function.

  */

// let arr = [1, 2, 3, 4];
// arr.push(4, 5, 6);
// arr.pop();

// arr.shift();
// arr.unshift(0);

// arr.splice(1, 2); // [1, 4]  // start index , number of elements to remove
// arr.splice(1, 2,'a'); // [1, 'a', 4]

// arr.reverse();
// arr.sort((a, b) => b- a);

// console.log(arr);
// arr.copyWithin(0,3)
// console.log(arr);

// let students = ["Emad", "Ali", "Mena", "Mostafa", "Ali", "Yousef"];
/*
// indexOf from left to right
console.log(students.indexOf("Ali"));// 1  //will start from zero index and get the index of Ali
console.log(students.indexOf("Ali",2)); //3 //will start from  index 2 and get the index of Ali 
console.log(students.indexOf("Ali",5));// -1 //will start from  index 5 and get the index of Ali

// lastIndexOf from right to left
console.log(students.lastIndexOf("Ali"));//4 //will start from last index and get the index of Ali
console.log(students.lastIndexOf("Ali",2));


console.log(students.includes("Mena")); // true
*/

// console.log(students.slice());
// console.log(students.slice(1,3)); // (1, n-1)  // start index , end index (n-1)

// let studentsGroupTwo = ["Zien", "Talal"];

// let allStudents = students.concat(studentsGroupTwo);
//  console.log(allStudents);
/*
let arr = [1, 2, 3,4,5];
// console.log(arr.join('-'));
// console.log(arr.toString())

let result = arr.findIndex(num => num > 3);
console.log(result) // index 3
*/

//3.Iteration Methods for Array :
// let groupOne = ["Ahmed", "Saber", "Ali", "Emran", "Gamela", "Nader"];
let arr = [1, 2, 3, 4];

/*
- forEach(callback, thisArg): Executes a provided function once for each array element.
- map(callback, thisArg): Creates a new array populated with the results of calling a provided function on every element in the array.
- filter(callback, thisArg): Creates a new array with all elements that pass the test implemented by the provided function.
- reduce(callback, initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
- some(callback, thisArg): Tests whether at least one element in the array passes the test implemented by the provided function.
- every(callback, thisArg): Tests whether all elements in the array pass the test implemented by the provided function.
- Array.from(): Creates a new, shallow-copied array instance from an array-like or iterable object.
- Array.of(): Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.


*/

// arr.forEach(num => console.log(num))

// let newArray = arr.map(num => num * 2)
// console.log(newArray)

// let newArray = arr.filter(num => num > 2)
// console.log(newArray)

// let result = arr.reduce(() => )

// let result = arr.some(num => num > 2)
// console.log(result)

// let result = arr.every(num => num > 2)
// console.log(result)

// let myStr = 'Emad'; // ['e','m']
// let newArr = Array.from(myStr);
// console.log(newArr)

// let newArr = Array.of(1,4,5,6,'test')
// console.log(newArr)

//array Destructuring:
//---------------------------------------------

// let groupOne = ["Ahmed", "Saber", "Ali", "Emran"];
// let [a,b,c,d] = groupOne;
// console.log(b)
// console.log(c)

// let a=1,b=2,c=3,d=4,e=5;
// let groupOne = ["Ahmed", "Saber", "Ali", "Emran"];
// [a,b,c,d,e="Emad"] = groupOne;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// let groupOne = ["Ahmed", "Saber", "Ali", "Emran"];
// let [, b, c] = groupOne;
// console.log(b);
// console.log(c);

// let groupOne = ["Ahmed", "Hesham", "Amr", ["Salah", "Zien", ["Aser", "Kamal"]]];
// let [a,b,c,[d,e,[f,g]]] = groupOne;
// console.log(f);
// console.log(d);

// let groupOne = ["Ahmed", "Hesham", "Amr", ["Salah", "Zien", ["Aser", "Kamal"]]];
// let [,,,[d,,[f,]]] = groupOne;
// console.log(f);
// console.log(d);

/* ============  array spreading ... : ======== */
/*
let setDataOne = [1, 2, 3];
let setDataTwo = [4, 5, 7];
console.log(setDataOne)
console.log(setDataTwo)
let allData = [...setDataOne,...setDataTwo]
console.log(allData)
*/

// copy for Array
/*
let setDataOne = [1, 2, 3];
let copiedArray = [...setDataOne,4,5,6]
console.log(setDataOne)
console.log(copiedArray);
*/
/*
let setDataOne = [1, 2, 3]; // original array
let copiedArray = [...setDataOne] // copy

copiedArray.push(6)
setDataOne.push(4)

console.log('Original Array:', setDataOne);
console.log('Copied Array:', copiedArray);
*/

// console.log("Emad");
// console.log(..."Emad");
// console.log([..."Emad"]);

/* ============ object ======== */
/*
let test = "country";

let user = {
  // properties
  name:"Emad",
  'user Name': "emad57",
  email:"emad@gmail.com",
  age:25,
  isStudent:true,
  userRole: ["editor","user","admin"],
  country:'Egypt',
  isAdmin:false,
  phones: {
    cairo:"0123456789",
    giza: {
      one:'9876543535',
      two:'5555555555'
    }
  },
  // Methods:
  greeting: function() {
    return `Hello Admin`
  },
  checkRole: function () {
    if(user.isAdmin) {
      return 'checkRole: is Admin'
    }else {
      return 'checkRole: Not Admin'
    }
  }
}

console.log(user);
console.log(typeof user);

// Dot Notation & Bracket Notation :
console.log(user.name);
console.log(user.email);
console.log(user.age);
console.log(user.userRole);
console.log(user.greeting());

//Bracket Notation:
console.log(user['user Name']);
console.log(user['email']);
console.log(user['age']);

console.log(user['country']);
console.log(user[test]);
console.log('----------------------------------');
console.log(user.userRole.join(" || "));
console.log(user.userRole[2]);
console.log(user.phones)
console.log(user.phones.cairo)
console.log(user.phones.giza)
console.log(user.phones.giza.one)
console.log(user.phones.giza.two)
console.log('----------------------------------');
console.log(user["phones"].giza.one);
console.log(user["phones"]["giza"].two);
console.log(user["phones"]["giza"]["one"]);

console.log(user.checkRole());
*/

// creating object :
/*
let user = {};
user.age = 20;
user["userRole"] =  ["editor", "admin", "employee"];
user.greeting = function () {
   return `Hello`;
}

console.log(user);
console.log(user.age);
console.log(user.userRole);
console.log(user.greeting());
*/

/*
let user = new Object({
  age : 20,
})
user["userRole"] =  ["editor", "admin", "employee"];
user.greeting = function () {
   return `Hello`;
}

console.log(user);
console.log(user.age);
console.log(user.userRole);
console.log(user.greeting());
*/

// var test = "ail";
// console.log(this)
// console.log(window);
// console.log(this === window);
// console.log(window);
// window.alert('hello')

//  console.log(this)
//  this.alert('hello')

// let user = {
//   // properties
//   name:"Emad",
//   'user Name': "emad57",
//   email:"emad@gmail.com",
//   age:25,

//   showName: function () {
//     return this.name
//   }

// }
// console.log(user.showName());
// console.log(user['user Name']);

// Destructuring Objects :
//-------------------------------------
// const person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
//   address: {
//     city: "New York",
//     zip: "10001",
//   },
// };

// const { name, age, job } = person;
// console.log(name);
// console.log(age);
// console.log(job);

// const { name: a, age:b, job:c } = person;
// console.log(a);
// console.log(b);
// console.log(c);

// const { name, job } = person;
// console.log(name, job);

/*
const { name, age, job = "unEmployee" } = person; // default value
console.log(name);
console.log(age);
console.log(job);
*/
/*
const { name, address: { city, zip }} = person;
console.log(name);
console.log(city); 
console.log(zip);
*/

// const person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
// };

// function printPersonData({ name, age, job } = person) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Job: ${job}`);
// }
// printPersonData();

/* ============ looping ======== */
// let groupOne = ["Ahmed", "Saber", "Ali", "Omar", "Eemy","Osamn"];
// console.log(groupOne[0])
// console.log(groupOne[1])

// for(let i=0; i <= 4; i++) {
//  console.log(groupOne[i])
// }

// console.log( groupOne.length)
// for(let i=0; i <= groupOne.length; i++) {
//  console.log(groupOne[i])
// }

// for(let i=0; i < groupOne.length; i++) {
//  console.log(groupOne[i])
// }
//--------------------------------------------------------------------
// const categories = ["Fiction", "Non-Fiction", "Science Fiction"];

// const booksArray = [
//   { title: "The Great Gatsby", category: "Fiction", color: "Blue" },
//   { title: "Sapiens", category: "Non-Fiction", color: "Yellow" },
//   { title: "To Kill a Mockingbird", category: "Fiction", color: "Green" },
//   { title: "Educated", category: "Non-Fiction", color: "Purple" },
//   { title: "1984", category: "Fiction", color: "Red" },
//   { title: "Dune", category: "Science Fiction", color: "Gold" },
//   { title: "Ender's Game", category: "Science Fiction", color: "Silver" },
//   { title: "Becoming", category: "Non-Fiction", color: "Orange" },
//   { title: "The Martian", category: "Science Fiction", color: "Bronze" },
// ];

// for(let i =0; i < booksArray.length; i++) {
//   let book = booksArray[i];
//   console.log(`Title: ${book.title}`);
//   console.log(`category: ${book.category}`);
//   console.log(`color: ${book.color}`);
//   console.log(`------------------------------`);
// }

/*
// outer loop
  for() {
   // inner loop
    for () {

    }
  }

*/
//--------------------------------------------------------------------
// nested loop
// for (let i = 0; i < categories.length; i++) {
//   let category = categories[i];
//   // console.log(`category: ${category}`)

//   for(let j =0; j < booksArray.length; j++) {
//     let book = booksArray[j];
//     // console.log(`book: ${book}`)
//     if(book.category === category) {
//      console.log(`Title: ${book.title} - category: ${book.category} - color: ${book.color}`)
//     }
//   }
//   console.log(`------------------------------`);
// }
//--------------------------------------------------------------------
//Loop Control [Break, Continue, Label]:
const books = [
  "The Great Gatsby",
  "Sapiens",
  "Educated",
  "Ender's Game",
  "Educated",
  "To Kill a Mockingbird",
  "Dune",
];
//  console.log(books.length)

/*
for (let i = 0; i < books.length; i++) {
  if (books[i] === "Educated") {
    console.log(`Found the Book: ${books[i]}`);
    break; // exit the loop as soon as "Educated" is found
  }
}
*/

/*
for (let i = 0; i < books.length; i++) {
  if (books[i] === "Educated") {
    continue; // skip this iteration if the book match the "Educated"
  }
  console.log(`Found the Book: ${books[i]}`);
}
*/

/*
terminate: 
for (let i = 0; i < books.length; i++) {
  if (books[i] === "Educated") {
    console.log(`Found the Book: ${books[i]}`);
    break terminate
  }
}
*/

/*
let i = 0;
for (;;) {
  console.log(`Found the Book: ${books[i]}`);
  i++;
  if (i === books.length) break;
}
*/

//while loop:
/*
let i = 0;
while (i < books.length) {
  console.log(`Found the Book: ${books[i]}`);
  i += 1;
  // if (books[i] === "Educated") {
  //   break; // exit the loop as soon as "Educated" is found
  // }
}
*/

//do while loop:
/*
let i = 0;
do {
  console.log(`Found the Book: ${books[i]}`);
  i++;
} while (i < books.length);
 */
/* ============ functions ======== */
// let result = arr.reduce(() => )

// function gratingUser() {
//   console.log("hello Admin");
// }
// gratingUser();

//function params
/*
function gratingUser(userName) {
  console.log(`hello ${userName}`);
}
gratingUser("Emad");
*/

/*
function gratingUser(userName,role) {
  console.log(`hello ${userName} and, Your Role is ${role}`);
}
gratingUser("Emad","Admin");
gratingUser("Ahmed","Student");
*/

// default parameters
//-------------------------------
/*
function gratingUser(userName,role) {
  if(role === undefined) role = `unknown Role`
  if (userName === undefined || userName === "") userName = "Gust"
  
  return `hello ${userName} and, Your Role is ${role}`;
}
console.log(gratingUser())
console.log(gratingUser("","Admin"))
*/

/*
function gratingUser(userName, role) {
  role = role || `unknown Role`;
  userName = userName || "Gust";

  return `hello ${userName} and, Your Role is ${role}`;
}
console.log(gratingUser());
console.log(gratingUser("", "Admin"));
*/

// function gratingUser(userName= "Gust", role= `unknown Role`) {
//   return `hello ${userName} and, Your Role is ${role}`;
// }
// console.log(gratingUser());
// console.log(gratingUser(undefined,"Admin"));

/*
function gratingUser(userName, role= `unknown Role`) {
  return `hello ${userName} and, Your Role is ${role}`;
}
console.log(gratingUser("ahmed"));
console.log(gratingUser("ahmed","Admin"));
*/

//function with returns:
//------------------------------
/*
function addingTwoNumber(x,y) {
 return x + y
}
let result = addingTwoNumber(5,6)
console.log(result)
*/

//Rest Parameters:
//------------------------------
/*
function calculation (numOne,numTwo,numThree) {
  return numOne+numTwo+numThree
}
console.log(calculation(34,29,67))
*/

/*
function calculation (...numbers) {
  // console.log(numbers)
  // console.log(Array.isArray(numbers))
  let result = 0;
  for(let i=0;i<numbers.length; i++){
    result += numbers[i];
  }
  return result
}
let finalResult = calculation(34,29,67,92,45,23,456,67,32,67)
console.log(finalResult)
*/

//nested functions:
//------------------------------
/*
function sayMessage(firstName,lastName) {
  let message = `Hello My Friend`;

  function concatMessage() {
    
    function getFullName() {
       return `${firstName} ${lastName}`
    }

    return `${message} ${getFullName()}`
  }// `Hello My Friend Mohamed Emad`

  return concatMessage();
}
console.log(sayMessage("Mohamed", "Emad"));
*/
/*
function factorial (n) {
  if(n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n-1)
}
console.log(factorial(5))
*/

//Anonymous Function:
//------------------------------
/*
const grateUser = function (userName) {
  return `Hello ${userName}`
}
console.log(grateUser("Emad"))
*/

// setTimeout(function () {
//   console.log("Hello after 2 Seconds")
// }, 2000);

// document.getElementById("clickMe").addEventListener("click", function () {
//    console.log("Hello By clickMe")
// })

//Immediately Invoked Function Expression (IIFE) is Anonymous Function:
/*
(function () {
  console.log("Hello By  (IIFE)");
})();
*/

// Arrow Function:
//------------------------------
/*
const grateUser = (userName) => {
  return `Hello ${userName}`
}
console.log(grateUser("Emad"))
*/

// const grateUser = (userName) => `Hello ${userName}`
// console.log(grateUser("Emad"))

/*
const person = {
  name: "emad",
  age: 20,
  grate: function () {
    setTimeout(() => {
      console.log("Hello after 2 Seconds");
    }, 2000);
  },
};
person.grate()
*/

// setTimeout(() => {
//   console.log("Hello after 2 Seconds");
// }, 2000);
/* ========= Higher Order Functions =========== */
// Higher-order functions are a fundamental concept in JavaScript that either:
// 1.Takes one or more functions as arguments, or
// 2.Returns a function as its result.

/*
let setData = [1,2,3,4,5,6]
const newSetData = setData.map(function(value,index,array){
  console.log(`Value is : ${value}`)
  console.log(`index is : ${index}`)
  console.log(`array is : ${array}`)
  console.log(`------------------------------------------`)
  return value + 1;
})

console.log(newSetData)
*/
//reduce:
// [6,4,5,6]
/*
let setData = [1,2,3,4,5,6]
const sum = setData.reduce(function(previousValue,currentValue,index,array){
   console.log(`previousValue is : ${previousValue}`)
  console.log(`currentValue is : ${currentValue}`)
  console.log(`index is : ${index}`)
  console.log(`array is : ${array}`)
  console.log(`------------------------------------------`)
  return previousValue + currentValue
})
  */
/*
const fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach(function(value,index){
 console.log(`Fruit ${index +1}: ${value}`);
})
*/
/*
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index, array) {
  array[index] = number * 2;
});
console.log(numbers);
*/
/* ============ callback hells ======== */
/*
console.log("1")
console.log("2")
window.alert("3")
console.log("4")
console.log("5")
*/
/*
console.log("1")
console.log("2")
setTimeout(() => {
  window.alert("3")
}, 5000);
console.log("4")
console.log("5")
*/

// setTimeout(() => {
//   console.log("connect with Server");
//   setTimeout(() => {
//     console.log("call image api");
//     setTimeout(() => {
//       console.log("api adding fixed width and height to the images");
//       setTimeout(() => {
//         console.log("api enhance images quality");
//         setTimeout(() => {
//           console.log("api rendering image in our Dom");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/*
function firstFunction(callback) {
  setTimeout(() => {
      console.log('call the image api');
      callback();
  }, 1000);
}

function secondFunction(callback) {
  setTimeout(() => {
      console.log('fix width and height for image');
      callback();
  }, 1000);
}

function thirdFunction(callback) {
  setTimeout(() => {
      console.log('enhancement for image and rendering images into Dom');
      callback();
  }, 1000);
}

// This is where the callback hell happens:
firstFunction(() => {
  secondFunction(() => {
      thirdFunction(() => {
          console.log('render the image...');
      });
  });
});
*/
/* ============ (Promises) ======== */
/****** How to solve callback hells (Promises) *********/
/*
- Promise Status
  - Pending: Initial State
  - Fulfilled: Completed Successfully
  - Rejected: Failed
*/
/*
let newPromise = new Promise((resolve,reject)=>{
 let hasBeenSucceed = true;
 if(hasBeenSucceed) {
  resolve("will buy new Bike")
 }else {
  reject(Error("Haddeek 3alka"))
 }
})
.then((resolveValue) => {console.log(resolveValue)})
.catch((rejectValue) => {console.log(rejectValue)})

console.log(newPromise)
*/

// Example using Promises
/*
function firstFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("call the image api");
      resolve();
    }, 1000);
  });
}

function secondFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fix width and height for image");
      resolve();
    }, 1000);
  });
}

function thirdFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("enhancement for image and rendering images into Dom");
      resolve();
    }, 1000);
  });
}

firstFunction()
  .then(() => secondFunction())
  .then(() => thirdFunction())
  .then(() => {
    console.log("All functions executed in sequence 1");
  })
  .then(() => {
    console.log("All functions executed in sequence 2");
  });
  */

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successful Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successful Or Failed Finally Do Something
*/

/*
const myNewPromise = new Promise((resolve,reject) => {
  let employees = ["Ahmed","Islam","Ali","Emad"];
  console.log(employees)
  if(employees.length === 4 ) {
    resolve(employees)
  }else {
    reject(Error("Number OF employees Not 4"))
  }
})


myNewPromise
.then((resolveValue) => {
  resolveValue.length =2;// first interView
  console.log(`first interview ${resolveValue}`)
  return resolveValue;
})
.then((resolveValue) => {
  resolveValue.length =1;// second interView
  console.log(`second interview ${resolveValue}`)
  return resolveValue;
})
.catch((rejectedValue) => console.log(rejectedValue))
// .finally(console.log("Operation is Done"))
*/

// read his : https://www.almabetter.com/bytes/articles/callback-hell-in-javascript

/*
  Promise
  - All
  - All Settled
  - Race
*/
/*
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("1- Iam The  First Promise");
  }, 1000);
});

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("2- Iam The  Second Promise");
  }, 2000);
});

const myThirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3- Iam The  Third Promise");
  }, 5000);
});
*/
// Promise.all : get all resolve promises if one of them reject it will leave the resolved and the the rejected promise
/*
Promise.all([myFirstPromise,mySecondPromise,myThirdPromise])
.then(
  (resolvedValues) => console.log(`Resolved: ${resolvedValues}`),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
)
*/

// get the all promises in status & value as an array of object for all promises resolved or rejected
/*
Promise.allSettled([myFirstPromise,mySecondPromise,myThirdPromise])
.then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
)
*/

// get the first promise even if the promise is resolved or rejected
/*
Promise.race([myFirstPromise,mySecondPromise,myThirdPromise])
.then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
)
*/
/* ============ async & await ======== */
/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

/*
function getUserData() {
  let users = ["Ahmed", "Soha", "Emad"];
  return new Promise((res, rej) => {
    if (users.length > 0) {
      res(users);
    } else {
      rej("No Users Available");
    }
  });
}

// console.log(getUserData())
getUserData()
.then(
  (resolvedValue) => console.log(resolvedValue)
)
.catch(
  (rejectedValue) => console.error(rejectedValue)
)
  */

/*
async function getUserData() {
  let users = ["Ahmed", "Soha", "Emad"];
    if (users.length > 0) {
      return (users);
    } else {
     throw new Error("No Users Available");
    }
}

// console.log(getUserData())
getUserData()
.then(
  (resolvedValue) => console.log(resolvedValue)
)
.catch(
  (rejectedValue) => console.error(rejectedValue)
)
*/

/**************************** await **************************/

/*
  Await
  - Await Works Only Inside async Functions
  - Await Make JavaScript ((((Wait)))) For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/
/*
const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("2- Iam The  Second Promise");
    reject(Error("Have an Error"))
  }, 3000);
});
*/
/*
async function loadData() {
  console.log("Hello 1")
  mySecondPromise.then((resolvedValue) => console.log(resolvedValue))
   console.log("Hello 2")
}
loadData();
*/
/*
async function loadData() {
  console.log("Hello 1");
  console.log(await mySecondPromise.catch((error)=>error))
  console.log("Hello 2");
}
loadData();
*/
/* ============ try & catch & Finally ======== */
/*
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Can't divide by zero");
    }
    let result = a / b;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Operation is Done from finally");
  }
}
divideNumbers(10,0)
*/
/*
const loadPostsData = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("get all posts from DB");
    reject(Error("Error Not get all posts"));
  }, 6000);
});

async function loadData() {
  try {
    console.log("Show Loading Screen .....");
    console.log(await loadPostsData)
  } catch (error) {
    console.error(await loadPostsData.catch((error)=>error))
  } finally {
    console.log("Hide Loading Screen");
  }
}
loadData();
*/