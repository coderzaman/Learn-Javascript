// Define arrow function
// function hello(){
//     console.log("hello world!");
// }



// Arrow Function
let hello = ()=> {
    console.log("hello world!");
}

hello();

// In only this senario we escape the parenthesis if function have one parameter
hello = name => {
    console.log("Hello,", name + "!");
}

hello("Aktar");


// If there is only statement which is return do not need return statement
// if write retrun it throw a error
// or if we have a statement only we can escape {}
cal = a => a ** a;
console.log(cal(5));


// if we write return we need to put {}
cal2 = a => {return a * a} 
console.log(cal(3));


//Callback function

numbers = [43,4,32,34,53,2];
numbers.forEach(element => console.log(element));


//Map 
let sq = numbers.map(element => element * element);

console.log(sq);