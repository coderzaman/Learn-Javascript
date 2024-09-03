// JavaScript Errors
// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

// Errors Will Happen!
// When executing JavaScript code, different errors can occur.
// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

// In this example we misspelled "alert" as "adddlert" to deliberately produce an error:

// If we add try catch block the program run before and after error occurs. But not use try catch where an be possible to cause error next programm can not be run


console.log("Bismillah");
try {
    addAlert("Welcome Guest!");
}catch(err){
    console.log(err.message);
}

console.log("Hi thank you");


// The throw Statement
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// The exception can be a JavaScript String, a Number, a Boolean or an Object:

let input = prompt("Enter a Number: ");

try{
    if(input < 18) throw "To Young";
    else if(input > 100) throw "You do not need to vote! Rest in House";
}catch(err){
    console.log(err);
}

// The finally Statement
// The finally statement lets you execute code, after try and catch, regardless of the result:


// Syntax
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }

try{
    addAlert("");
}catch(err){
    console.log(err.message);
}finally{
    console.log("Do't Care Error or NOt");
}

try{
   console.log("Finally Check");
}catch(err){
    console.log(err.message);
}finally{
    console.log("Do't Care Error or NOt");
}