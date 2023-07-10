// alert("Welcome to my webpage");
// console.log("Labas");
// console.log("rytas");

let age = 27
let year = 2023
console.log(age, year)

age = 15
console.log(age)
// let variable can be overriden

const yearOfBirth = 1996
/* variable names can't have any spaces, instead use camelCase
variable names can't start with a number
try to create meaningful names */
console.log(yearOfBirth)
/* yearOfBirth = 1995;
const variable can't be overriden*/

var score = 75
console.log(score)
// var is an older way to create variables
// JS data types: numbers, strings ("hello, world"), booleans (true/false), null (explicitly set a variable with no value), undefined (set by default), object (complex data structures:arrays, dates, literals),symbols

// strings
console.log('Labas rytas')
let email = 'info@vkk.lt'
console.log(email)

// string concatenation (joining strings together)
let firstName = 'John'
let lastName = 'Button'
let fullName = firstName + ' ' + lastName
// Add a space
console.log(fullName)

// Extract a single character
console.log(fullName[0])

// string length
console.log(fullName.length)

// string methods (functions)
console.log(fullName.toUpperCase())
// IMPORTANT! Add a parenthesis at the end of it.
let result = fullName.toLowerCase()
console.log(result, fullName)
// These methods don't alter the original value.

let index = email.indexOf('@')
// '@' is an argument
console.log(index)
