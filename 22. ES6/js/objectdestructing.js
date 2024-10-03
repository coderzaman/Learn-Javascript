let person = {
    firstName: 'Abdullah',
    lastName: 'Abdur Rahman',
    dob: "12-23-1998"
};

// We can access it traditionally

var name = person.firstName + ' ' + person.lastName
var dob = person.dob;

console.log(`Name: ${name}
Date of Birth: ${dob}`);

// We can access it with object destructuring
var { firstName, lastName, dob } = person;
console.log(firstName + ' ' + lastName);
console.log(dob);

// we need to same var object destructuring name same as object properties
var { fname, lname, dob } = person;
console.log(fname + ' ' + lname); //undefined  cause use different name
console.log(dob);


// If we need change name we can use
var { firstName: fname, lastName: lname, dob } = person;
console.log(fname + ' ' + lname);
console.log(dob);


// we can use Object destruction in function

function printObject({ firstName, lastName, dob }) {
    console.log(fname + ' ' + lname);
    console.log(dob);
}

console.log(firstName + ' ' + lastName);
console.log(dob);