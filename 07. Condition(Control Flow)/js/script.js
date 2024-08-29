// Controlflow

// Conditional Statements
// In JavaScript we have the following conditional statements:
// Very often when you write code, you want to perform different actions for different decisions.
// You can use conditional statements in your code to do this.


// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// Syntax
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

let hour = 2;
if (hour < 18) {
    var greeting = "Good day";
}

console.log(greeting);

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

// Syntax 
// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }
hour = 20;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

// Syntax
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }
let time = 9;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


// if there is oneline in any conditional blokc we can skip {} 

if (time < 10) greeting = "Good morning";
else if (time < 20) greeting = "Good day";
else greeting = "Good evening";


console.log(greeting);

//If there is more than one line in any conditional blokc we must be write code with in {}

if (time < 10) {
    greeting = "Good morning";
    console.log("Have a great day");
} else if (time < 20) {
    greeting = "Good day";
    console.log("Have a great day");
} else {
    greeting = "Good evening";
    console.log("Have a great day");
}

console.log(greeting);


// Excercise:
// Find largest number form 3
let num1 = parseInt(prompt("Enter Number 1: "));
let num2 = parseInt(prompt("Enter Number 2: "));
let num3 = parseInt(prompt("Enter Number 3: "));

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is grater than ${num2}, ${num3}`);
} else if (num2 >= num3) {
    console.log(`${num2} is grater than ${num1}, ${num3}`);
} else {
    console.log(`${num3} is grater than ${num1}, ${num2}`);
}

//Nested if 
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`${num1} is grater than ${num2}, ${num3}`);
    } else {
        console.log(`${num3} is grater than ${num1}, ${num2}`);
    }
} else if (num2 >= num3) {
    console.log(`${num2} is grater than ${num1}, ${num3}`);
} else {
    console.log(`${num3} is grater than ${num1}, ${num2}`);
}

// The JavaScript Switch Statement
// Use the switch statement to select one of many code blocks to be executed.

// Syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// This is how it works:
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

let currentMonth;
switch(new Date().getMonth()){
    case 0: 
        currentMonth = "January";
        break;
    case 1:
        currentMonth = "February";
        break;
    case 2:
        currentMonth = "March";
        break;
    case 3:
        currentMonth = "April";
        break;
    case 4:
        currentMonth = "May";
        break;
    case 5:
        currentMonth = "June";
        break;
    case 6:
        currentMonth = "July";
        break;
    case 7:
        currentMonth = "August";
        break;
    case 8:
        currentMonth = "September";
        break;
    case 9:
        currentMonth = "Octobor";
        break;
    case 10:
        currentMonth = "November";
        break;
    case 11:
        currentMonth = "December";
        break;
    default:
        currentMonth = "Something is wrong";
        break;
      
}

console.log(currentMonth);

// excercise:
let score = parseFloat(prompt("Enter your score: "));


if(score < 0 || 100 < score){
    console.log("Invalid score Input.");
}else if(score < 40){
    console.log("Your Grade is F.");
}else if(score < 45){
    console.log("Your Grade is D");
}else if(score < 50){
    console.log("Your Grade is C");
}else if(score < 55){
    console.log("Your Grade is C+");
}else if(score < 60){
    console.log("Your Grade is B-");
}else if(score < 65){
    console.log("Your Grade is B");
}else if(score < 70){
    console.log("Your Grade is B+");
}else if(score < 75){
    console.log("Your Grade is A-");
}else if(score < 80){
    console.log("Your Grade is A");
}else{
    console.log("Your Grade is A+");
}


// excercise

num1 = parseFloat(prompt("Plese Enter Number 1: "));
num2 = parseFloat(prompt("Plese Enter Number 2: "));

let option = parseInt(prompt(`Enter the Option:
    1. Add
    2. Subtract
    3. Multiply
    4. Division`));


let res = null;
if(!isNaN(num1) && !isNaN(num2) && !isNaN(option)){
    switch(option){
        case 1:
            res = num1 + num2;
            break;
        case 2:
            res = num1 - num2;
            break;
        case 3:
            res = num1 * num2;
            break;
        case 4:
            res = num1 / num2;
            break;
        default:
            res = "Invalid Option";
            break;
    }
}else{
    console.log("Invalid Input");
}

if(res == null) console.log("No Result")
else console.log("Result is: ", res);




