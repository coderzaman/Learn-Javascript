// JavaScript Loops
// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
// code block to be executed
// }
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// excersice:
//Print even numbers 1 to 10
i = 1;
console.log("Even numbers 1 to 10");
while (i <= 10) {
    if (i % 2 === 0) console.log(i);
    i++;
}


// The Do While Loop
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
//   // code block to be executed
// }
// while (condition);

// The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
console.log("Do While Loop:");
i = 1;

do {
    console.log(i);
    i++;
} while (i > 10);


// The For Loop
// The for statement creates a loop with 3 optional expressions:
// Syntax
// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }


// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.

console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// excercise: add 1 to 10 

console.log("For Excercise 1: ");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

console.log("And you can omit expression 1 (like when your values are set before the loop starts");
i = 2;

for (; i <= 10; i++) {
    console.log(i);
}

// Expression 2
// Often expression 2 is used to evaluate the condition of the initial variable.
// This is not always the case. JavaScript doesn't care. Expression 2 is also optional.
// If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
// If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.

console.log("Ignoring expression 2:")
i = 3;

for (; ; i++) {
    if (i == 7) break;
    console.log(i);
}


// Expression 3
// Often expression 3 increments the value of the initial variable.
// This is not always the case. JavaScript doesn't care. Expression 3 is optional.
// Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
// Expression 3 can also be omitted (like when you increment your values inside the loop):
console.log("Ignoring expression 3:")
i = 3;

for (; ;) {
    if (i == 7) break;
    console.log(i);
    i++;
}


// Loop Scope
// Using var in a loop:
var n = 5;

for (var n = 0; n < 10; n++) {
    console.log(n);
}
console.log("End Loop");
console.log(n);


// Using let in a loop:


let o = 5;

for (let o = 0; o < 10; o++) {
    console.log(o);
}
console.log("End Loop");
console.log(o);

// In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

// In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

// When let is used to declare the i variable in a loop, the i variable will only be visible within the loop

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:
// Syntax
// for (key in object) {
//   // code block to be executed
// }

// For in trough index of array and string and propery of object


// Example
// for in through the property of an Object. With the property we can access the property value

const person = { fname: "John", lname: "Doe", age: 25 };
console.log("For in loop using with object: ");
for (let x in person) {
    console.log(person[x]);
}
console.log("For in loop using with array: ");
const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
    console.log(numbers[x]);
}

console.log("For in loop using with String: ");
const line = "Hello, Banglades";
for (let ch in line) {
    console.log(line[ch]);
}

// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.

console.log("For Each Loop: ");

numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value, index, array);
}

// The For Of Loop

// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// But it not working for Object 

// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }

//It give us value of each index in the array or string
console.log("Looping over an Array");
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x);
}

console.log("Looping over a String");
let language = "JavaScript";

for (let x of language) {
    console.log(x);
}

// JavaScript Break and Continue

// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.
console.log("The break statement can also be used to jump out of a loop:");

for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    console.log(i);
  }

// The Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

console.log("This example skips the value of 3:");
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log(i);
}


// Excercise
console.log("Sum of the series of square Numbers: ");

let input = parseInt(prompt("Please Enter The value: "));

let res = 0;
let str = "";
for(let i = 1; i <=input; i++) {
    let val = i * i;
    console.log(val);
    res += val;
    str += val.toString();
    if(i === input) continue;
    str += " + "
}

console.log(str, "= ", res);