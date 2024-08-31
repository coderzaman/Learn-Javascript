// A JavaScript function is a block of code designed to perform a particular task. 
// A JavaScript function is executed when "something" invokes it (calls it).

// JavaScript Function Syntax
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)
// The code to be executed, by the function, is placed inside curly brackets: {}

// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
// }

// Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.

// Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function:
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)

// Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":


function Greeting() {
    console.log("Hello, Aktar!");
}

Greeting();

function Greeting1(name) {
    console.log("Hello,", name + "!");
}
Greeting1("Shakib");

// Covert Fareheit to Celcius

function toCelcius(fareheit) {
    return (5 / 9) * (fareheit - 32);
}

console.log("Celcius: " + toCelcius(24));

// we can also call function and store it value to variable:
let value = toCelcius(50);
console.log("Celcius: " + value);

// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
// function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
// }

// console.log(carName); // carName is a local variable of myFunction we can not access it out of the function


//We can call the function after or before the function definition. But need to fuction must be defined

// It happens because javascript has technology which is hosting. Hosting hold up the declaretion of javascript let, var, function to to top
// Before running the program

myFriend();
function myFriend() {
    console.log("What's up bro? What can do for you?");
}

// Note: Arrow Function call should be happen after the function definition

// we can also defined default value of the function parameter
function fullName(firstName = "Abullah", lastName = "Abdur Rahman") {
    console.log(firstName, lastName);
}
fullName();
fullName("Abdullah", "Shafiq");

// JavaScript Arrow Function
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:
let a = 4;
let multipliedTwo = (a, b) => a * b;
console.log(multipliedTwo(23, 4));

// If there is only one parameter of arrow function you can skip the parenthesis
// Otherwise we must be put the parethesis ()

let morningGreeting = name => console.log("Good Morning:", name);
morningGreeting("Aktaruzzaman");

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

let loudAndClear = sound => sound + " Allahu Akbar!";
console.log(loudAndClear("Favourite Sound:"));

// we cab also add one more statement in arrow function 
let hello = () => {
    console.log("Hello, ");
    console.log("Bangladesh! ");
}

hello();

// Array Iteratin using forEach
var foods = ["Cake", "Ice cream", "Chocolate", "Bread"];
var numbers = [1, 3, 4, 5, 67, 8, 9];

// 1st parameter : Item
// 2nd parameter : Index 
// 3rd parameter : Whole array

foods.forEach(function(value, index, arr){
    console.log(value);
    console.log(arr);
    console.log(index);
});

// we can also access only value of array, If this function have one parameter this is the item, if two first one is  item second one is index, if three last one is whole array

numbers.forEach(function(value){
    console.log(value);
});

console.log("Map:")
// Map array Method 
const newArr = numbers.map(function(value){
    return value * value;
});

console.log(newArr);

// Method in Object 

let ob1 = {
    fname: "Abdullah",
    lname: "Abdur Rahman",
    age : 18,
    village : "Abdullapur",
    fullName : function(){
        return `${this.fname} ${this.lname}`;  
    }
} 

console.log(ob1.fullName());
console.log(ob1.lname);

//Function with in function
Explanation:
// myName("Aktaruzzaman"): When you call myName("Aktaruzzaman"), it returns the retName function.
// myName("Aktaruzzaman")(): The returned function retName is then immediately invoked by the () after it, which returns the value of name, i.e., "Aktaruzzaman".
function myName(name){
    function retName(){
        return name;
    }
    return retName;
}

console.log(myName("Aktaruzzaman")());


// Math Object

let val;
val = Math.PI
console.log(val)
console.log(Math.E)

console.log(Math.round(5.5));
console.log(Math.ceil(5.01));
console.log(Math.floor(5.99));
console.log(Math.sqrt(9));
console.log(Math.abs(-33));
console.log(Math.pow(2,3));
console.log(Math.min(23,32,3,42,-1));
console.log(Math.max(43,4,23,21));

// The Math.random() function in JavaScript produces a floating-point number between 0 (inclusive) and 1 (exclusive). This means that:

// The smallest possible value returned by Math.random() is 0 (though it's extremely rare to actually get 0).
// The largest possible value is just slightly less than 1, such as 0.9999999999999999, but it will never be exactly 1.

console.log(Math.random());
console.log(Math.floor(Math.random() * 100 + 1));


// Date Object 
let today = new Date();
console.log(today);

console.log(new Date("11-05-1998"));
let birthdate = new Date("04-13-1998");
console.log(birthdate);

console.log(new Date("04-13-1998 5:10:11"));
console.log(new Date("04/13/1998 5:10:11"));


//Month and Day start with 0
console.log(new Date().getMonth());
console.log(new Date().getDay());
//Fetch the date
console.log(new Date().getDate());
console.log(new Date().getFullYear());

// getTime() function returns amount of seconds since jan 1, 1970
console.log(new Date().getTime());


console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());

// we can set month, date,year, hour etc in eixisting Date obejet 
birthdate = new Date("04-13-1998");
birthdate.setMonth(5);
console.log(birthdate);

// JavaScript Scope

// Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:
// Block scope
// Function scope
// Global scope

// Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.


// Variables declared with let and const inside a { } block cannot be accessed from outside the block:

{
    let x = 2;
    console.log(x);
}

// console.log(x); // cause a error

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.

{
    var x = 4;
    console.log(x);
}
console.log(x);

// Function Scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:
function myFunction() {
    var carName = "Volvo";   // Function Scope
  }
// console.log(carName); //erros
function myFunction() {
    let cNamee = "Car";   // Function Scope
  }
//   console.log(carName); //error
function myFunction() {
    const crName = "Bus";   // Function Scope
  }
// console.log(crName);//error


// Global JavaScript Variables
let carName = "Volvo";

// code here can use carName
function myFunction() {
    console.log(carName); //error    
}

console.log(carName); 
myFunction();

// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Auto Global";
}

console.log(carName);


// Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".
// In "Strict Mode", undeclared variables are not automatically global.


function myStrict(){
    "use strict";
     hen = 2; // casuse error
}

// myStrict();

