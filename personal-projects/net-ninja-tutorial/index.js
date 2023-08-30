// Important!
/* JS is case sensitive
Each statement ends with a semicolon (;)
JS runs from top to bottom */

// Variables
/*We use them to store information
Don't start variables with numbers!
You can use camelCase.
let variableName = variableValue;
We can update let variable values.
*/

// Basic Mathematical Operators
/*
= the assignment operator (priskyrimas),
+ addition,
- subtraction,
/ division,
* multiplication
-------------------
5+"hello" becomes a string
Concatenation of strings - "hello"+" David"
NaN -Not a Number
*/

//Math Operator Short-hand
/*
let number=15
-------------------------
Shorthands:
number += 5
number -= 5
number /= 2
number *= 2
number++ (increment)
number-- (decrement)
*/

// Konsolė
/* Joje irgi galima rašyti kodą */

// Booleans
/* Value that represents true or false.
They evaluate certain circumstances and conditions (eg., if a user's password is good).
let iLikeHorrorMovies = false; (not in quotes)
Boolean(7 > 5) returns true
Boolean(7 < 5) returns false
Boolean(0) returns false
Boolean("hello") returns true
Boolean("") returns false
*/

//If statements check certain conditions
/*let iAmCoding = true;
if (iAmCoding) {
  document.write("Good job!");
}*/
let number = 9;
//if equal
if (number === 10) {
  document.write("The number is 10" + "<br>");
} else {
  document.write("The number is not 10" + "<br>");
}

//Else if statements check multiple different conditions
let yourAge = 25;
if (yourAge > 30) {
  document.write("You are over 30" + "<br/>");
} else if (yourAge > 20) {
  document.write("You are over 20" + "<br/>");
} else {
  document.write("You are not over 20" + "<br/>");
}

//Comparison operators: > , >= , < , <= , == (equal, checks value), === (equal, checks value AND type), != (not equal, checks value), !== (not equal, checks value AND type)

//Logical operators: AND(&&) and OR(||)
let myAge = 25;

if (myAge >= 18 && myAge <= 30) {
  document.write("You can come to my house party" + "<br/>");
} else {
  document.write("You ain't coming" + "<br/>");
}

// While loops
let dogsAge = 5; //index variable
while (dogsAge < 10) {
  //condition
  console.log("Dog's age is less than 10");
  dogsAge++; //increment (very important)
}

//For loops
for (let catsAge = 0; catsAge < 10; catsAge++) {
  console.log("The cat's age is under 10");
}

let links = document.getElementsByTagName("a");
for (let i = 1; i <= links.length; i++) {
  //links.length is a number of links
  console.log("This is a link's number:" + i);
}

// Break and continue keywords
for (let i = 0; i < 10; i++) {
  if (i === 3 || i === 5) continue; //continue skips 3 and 5;
  console.log(i);
  if (i === 7) break; //when i reaches 7, the loop breaks
}

//Functions
/*Functions group logical sections of code together, so that I can call those sections whenever I want to.
A function name can't start with a number.*/
function getAverage(a, b) {
  //we pass in the arguments a,b
  let average = (a + b) / 2; //a local variable with a local scope
  return average; //the average is returned and passed to a variable
}
//Calling the function
let myResult = getAverage(5, 6); //a global variable with a global scope

//Variable scope
/*It determines where in the code a variable is visible and which part of the code can use it.
A global variable is declared outside of a function. It can be used anywhere in a code.

A local variable is declared inside of a function. It can only be used within the funtion.
*/

// console.log(average); average variable isn't defined

function logResult() {
  console.log("The average is " + myResult);
}
logResult();

//Numbers
/*Don't surround your numbers with quotes
typeof() metod gives the datatype
Math object does different calculations*/
console.log(typeof (5 + "5")); //a string
console.log(Math.round(5.8)); //rounding
console.log(Math.floor(5.8)); //rounding downwards no matter what
console.log(Math.ceil(5.8)); //rounding uowards no matter what
console.log(Math.max(4, 7, 9, 1)); //a maximum

//NaN
console.log(typeof (5 * "7")); //a number
let a = 5;
let b = "apple";
console.log(a * b); //NaN
//Checking whether it's a number: isNaN()
if (isNaN(b)) {
  console.log("It's not a number");
} else {
  console.log("Well done, dude");
}
//Checking whether it's a number
if (!isNaN(a)) {
  console.log("Well done, dude");
} else {
  console.log("It's not a number");
}

//Strings
/*Double quotes cancel a string.
Combating: 'I am a "fun" string.'
You can escape characters with \.
*/
let myString = "I am a string";
//Property of strings
console.log(myString.length);
//Methods of strings
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string")); //a starting point
if (myString.indexOf("šuniukas") === -1) {
  console.log("The word šuniukas is not in the string");
}
//Comparing strings: ===

//Slice and Split strings
//Splice
let str = "Hello guys!";
let str2 = str.slice(3, 7);
console.log(str2);
let str3 = str.slice(3);
console.log(str3);
//Split method splits a string up into different piaces and puts those pieces into an aray
let tags = "meat, ham, salami, pork, beef, chicken";
let tagsArray = tags.split(","); //split when you see a ","
console.log(tagsArray);

//Arrays
let myArray = [];
myArray[0] = 25;
myArray[1] = 45;
myArray[2] = true;
myArray[3] = "Hello";
//Updating array values
myArray[2] = false;
console.log(myArray);

let myArray2 = [10, 20, "hi", false];
console.log(myArray2);

let myArray3 = new Array(5);
console.log(myArray3);

// Array properties
console.log(myArray.length);

// Array methods
console.log(myArray.sort());
console.log(myArray.reverse());

// Objects
// Objects have properties inside
let myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shawn";
//We can insert functions (methods) inside
myCar.drive = function () {
  console.log("Now driving");
};
myCar.drive();

let myCar2 = {
  maxSpeed: 70,
  driver: "Net Ninja",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
  logDriver: function () {
    console.log("Driver's name is " + this.driver);
  },
};
myCar2.drive(50, 3);

//this keyword
myCar2.test();
myCar2.logDriver();

//Constructor functions (functions that create objects)
let Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log("Driver's name is " + this.driver);
  };
};

let myCar3 = new Car(70, "John");
let myCar4 = new Car(80, "Jack");

//The DOM - Document Object Model
/*The Document is just a web page (an HTML document).
Every element within the document is an object.
We can use these objects to call methods on them.
Nodes are everything we can change within the document (elements, text and attributes)
*/

//Reaching the DOM:

//Store elements within variables.
// 1) getElementsByClassName
let myContent = document.getElementsByClassName("content");
// 2) getElementsByTagName
let myLinks = myContent[0].getElementsByTagName("a");
// 3) getElementByID
// 3) querySelector

//Changing content
//Changing the content: innerHTML property
myLinks[2].innerHTML = "I am a link";
//Changing the content: textContent property

//Changing attributes:
// 1) Grab an element ->
// 2) Use set- or get- Attribute
console.log(myLinks[2].getAttribute("href"));
myLinks[2].setAttribute("class", "pie");
//.className property
myLinks[2].className = "Ninja";
//.style property
