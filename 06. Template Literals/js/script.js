// Template Literals(New Feature of ES6)
// Backtick `` 
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
// Template Strings allow both single and double quotes inside a string:
console.log(`Hello, "Aktaruzzaman"`);
console.log(`Hello, 'Aktaruzzaman'`);

// Template Strings allow multiline strings:
let text = `I wanna write a poems
But I have no coins
How can publich poems
Give me some coins for writing poems`;

console.log(text);

// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.

// The syntax is: ${..}

// Variable Substitutions:  Template Strings allow variables in strings:
let fisrtName = 'Aktaruzzaman';
let middleName = "Al";
let lastName = "Fatih";

console.log(`Name: ${fisrtName} ${middleName} ${lastName}`);

let a = 10; 
let b = 20;

console.log(`${a} + ${b} = ${a + b}`);

