// Spread Operator 
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// Split the array element or object make it to array or object or add array with another array

let name = "Abu Huraria";
name = [...name];
console.log(name);

name = {...name};
console.log(name);


// Concat Array
let fruits1 = ["Apple", "Banana", "Cherry", "Date"];
let fruits2 = ["Emblic", "fig", "Guava"];
let fruits3 = ["Hog Plum", "Imbe"];
let fruits4 = ["Jackfruit"];

// It make array to two D arrays
let fruits = [fruits1, fruits2, fruits3, fruits4];
console.log(fruits);

// but we need make arrays to concat with  one 
fruits = [...fruits1, ...fruits2, ...fruits3, ...fruits4];
console.log(fruits);

// spread Object
let person = {
    name: "Abdullah",
    occupation: "Student"
}

let person1 = {
    name: "Abdur Rahman",
    occupation: "Student"
}


let p3 = {...person1, dob:"22/12/1998"};
console.log(p3);


// Spread in function 
let numbers = [1, 2, 30, 4, 5, 6, 7];
// console.log(Math.max(numbers)); // none because it dose not work on array
console.log(Math.max(...numbers));

let fullName = ["Abdullah", "Abdur Rahman"];

function fname(fname, lname){
    console.log("Name:", fname, lname);
}


fname(...fullName);