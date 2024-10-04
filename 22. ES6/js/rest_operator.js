// Rest Operator
// In JavaScript, the rest operator (...) allows you to represent an indefinite number of arguments as an array. 

numbers = [10, 20, 30, 40, 50, 60];

var [num1, num2, num3] = numbers;
console.log(num1, num2, num3);

var [num1, num2, ...num3] = numbers;
console.log(num1, num2, num3);


// Use with Object 
let person = {
    name: 'John',
    age: 34,
    dob : '19-09-1998'
}

let {name, ...age} = person;
console.log(name, age);

// Use with function

function sum(name, num2, ...num3) {
        console.log(name, num2, num3);
}

sum("Abdullah", 10,30,34,33);
// When we pass the arguments numbers function num3 parameters make an array to store the array
sum(5, 7, numbers);
// When we pass the arguments spread the array the when passed it separted to multiple numbers and ...num3 make it as an array and receive it as an array Like 
// ... make it array to indvidual item like [numbers = 10,20,30,40,50,60]
// sum function receives it as an array in ...num3 parameters

sum(5, 7, ...numbers);
