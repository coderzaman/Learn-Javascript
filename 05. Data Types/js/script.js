// Data Types
// Thre types of data store in javaScript
// 1. Numbers: Number can be interger or decimal without qutations. Ex: 34,34.3
// 2. Strings: Sequence of characters(letters, numbers, punctuation) called strigs. String write in witin qutations.
//      It can be single or double quaote
//      Example: 'Hello, world' or "Hello, world"
// 3. Boolean: Boolean can be either true or false.
// 4. Array: array can be hold one or more data in a single vaiable with index.
//      Write within a square bracket
//      var num = [1, 2, 3] or var name = ["abdullah", "Abdur Rahman", "james",] or   var nameNum = [1, 2, 3, "abdullah", "Abdur Rahman", "james",]
// 5. Object: Collection of property: value pairs
//      Written within curly braces
//      var man = {name: "Abdullah", age: 21, home: "Dhaka"}
//      Similar to html attribute


// There some data types also have javascript. undefined, Empty value, null, NaN


// Number
var x = 23;

// we can write number with exponential notation
// 2 * 10^5
x = 2e5;
console.log(x);

// 2 * 10^-5
x = 2e-5;
console.log(x);

// In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard). 

// Infinity is also a Number. We can Infiinity in variable and doing other operation with it

x = Infinity;
console.log(x);
x += Infinity;
console.log(x);
x /= 34343;
console.log(x);

// We can right hexdecimal  numbers also. But it will be as intger nuber. Hexdecimal number start with 0x
x = 0xF;
console.log(x);

// we can convert numbers to string using toString function
x = x.toString();
console.log(x);

//We can also convert a decimal number to hexdecimal, octal with toString function: x.toString(base). This function return a string.

x = 15;
let y = x.toString(16);
console.log(y);

y = x.toString(2);
console.log(y);

y = x.toString(8);
console.log(y);

// We can limit number after decimal with toPrecion() function. This function return a string.

//parameter value indicate how many number have after doing this operation
x = 3.1416;
x = x.toPrecision(3);
console.log(x);

x = 34.23;
console.log(x.toPrecision(1));

// Convert string to integer or float with parseInt() function and parseFloat() function

x = x.toString();
console.log(x);
x = parseInt(x);
console.log(x);
x = "22.23";
x = parseFloat(x);
console.log(x);

console.log(isNaN(x));
x = "asdf23";
console.log(isNaN(x));
console.log(isFinite(Infinity));
console.log(isNaN("d"));


// String 
// length of String: length property
x = "Hello, world!";
console.log(x.length);

// Indexing:
console.log(x[2]);

// find index of char
console.log(x.indexOf("o"));

// String is immutable  meanse u can not change string value like array

x[3] = "h";
console.log(x);

//Convert string to upper to lower or lower to upper
console.log(x.toLowerCase());
console.log(x.toUpperCase());


// Remove before and after extra space: trim() function
x = "     Abdur Rahman    ";
console.log(x.trim());

// Cut string. string.slice(start, end)
x = "Hello, world!";
console.log(x.slice(7,12));

// when you use negative indexing with the slice() method, the indexes are counted from the end of the string, where -1 represents the last character, -2 represents the second-to-last character, and so on.
x = "Hello, world!";
console.log(x.slice(-6,-5));
console.log(x.slice(-13,-8));

// if one parameter used slice number char given parameter then print 

console.log(x.slice(2));

// if use negetive indext it cut from last 
console.log(x.slice(-2));



// Substring: similar as slice but here: string.substr(start, length)
x = "Hello, world!";
console.log(x.substr(2,3));
console.log(x.substr(-5,2));


// Replace: string.replace(searchValue, newValue)
let text = "Visit Microsoft!";
console.log(text.replace("Microsoft", "Bangladesh"));

//Globals replacement:
text = "Mr Blue has a blue house and a blue car";
console.log(text.replace(/blue/g,"red"));

// concat string with concat function
console.log(x.concat(text," gest"));

//Boolean 
// if there any correct value assign in variable it Boolean value is true

// If value is NaN, undefined, null, 0 Boolean value will be false

console.log(Boolean(x));
let z;
console.log(z);
console.log(Boolean(z));
z = "sfdsa"/10;
console.log(z);
console.log(Boolean(z));
z = null;
console.log(Boolean(z));
z = 0;
console.log(Boolean(z));

// Array: Array Hold can multiple value to one variable
var countries = ["Bangladesh", "USA", "Egypt"];
console.log(countries);

//Acces with index
console.log(countries[0]);

//length of array
console.log(countries.length);

// Array is mutable. JavaScript arrays are mutable, meaning that the values they contain can be changed.

countries[1] = "Afganistan";
console.log(countries[1]);

// Add Item in array
countries[3] = "Palestine";
countries[countries.length] = "Qatar";
console.log(countries);

//We can and remove array item with push and pop. It can apply ending of an arra
countries.push("USA");
console.log(countries);
countries.pop();
console.log(countries);

// push() function current length of array after adding item
// pop() function return removing item
var pushRe = countries.push("UK");
console.log(pushRe);
var popRe = countries.pop();
console.log(popRe);


// we can add multiple item with push
countries.push("Turkish", "Saudi Arabia", "Tuneshia");
console.log(countries);

// shift and unshift method remove and add item starting of array
countries.shift();
console.log(countries);

countries.unshift("Bangladesh", "Albania");
console.log(countries);


// declare an empty array
var numbers = [];
numbers.push(1);
numbers.push(3);

// We can add also diffent type of value in one array  
numbers.push("Five");
console.log(numbers);

//Split Function: str.split(divider); It execluding divider string or char from string and retrun an array
x = "Bangladesh Bangladesh";
console.log(x.split("gl"));


//divide each letter
x = "Bangladesh";
console.log(x.split(""));

//Divide word by space
x = "Palestine is a country. There is no country named israel in the world."
xa = x.split(" ");
console.log(xa);

console.log(xa.toString());
console.log(xa.join(" "));

var conArr =  xa.concat(countries,numbers);
console.log(conArr);


//Object is data type in javascript. Object has properties and values
// Declare an Object
var students = {
    name: "Abdur Rahman",
    age : 25,
    hometown: "Cox's Bazar"
}

console.log(students);

//Acces properties
console.log(students.name);
console.log(students["name"]);

//Add new properties in object
students["village"] = "Palakata";
console.log(students);

// Remove properties form object
delete students["village"];
console.log(students);


//Declare a empty object
students = {};
console.log(students);

//Add new properties
students.name = "Abdur Rahman";
students["age"] = 25;
console.log(students)

// Note: If porperty is not already exist in Object. Add it as new propery
//If exist replace existing value of property


students.name = "Abdullah";
console.log(students);
students.hometown = "Cox's Bazar";
console.log(students);

// we can also Create an empty JavaScript object using new Object(), and add 4 properties:
// Create an Object
const person = new Object();
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);

// Note: The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.


// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.


function Person(first,last,age,country){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.country = country;
}

var myFather = new Person("Shamsulz" , " Alam", 60, "Bangladesh");
var myMother = new Person("Sahnewaj", " Begum", 48, "Bangladesh");


var mySelf = new Person("Aktaruzzaman", " Aktaruzzaman", 26, "Bangladesh");

console.log(myFather);
console.log(myMother);
console.log(mySelf);




// Property Default Values
// A value given to a property will be a default value for all objects created by the constructor

function Person(first,last,age,country){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.country = "Bangladesh";
}

myFather = new Person("Shamsulz" , " Alam", 60);
myMother = new Person("Sahnewaj", " Begum", 48);
mySelf = new Person("Aktaruzzaman", " Aktaruzzaman", 26);

console.log(myFather);
console.log(myMother);
console.log(mySelf);
// We also learned that you can not add a new property to an existing object constructor:
// Person.newPro ="eafd"; //Not work
// To add a new property to a constructor, you must add it to the constructor function:

// Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructors:

Person.prototype.language = "Bangla";
console.log(myFather);
console.log(myMother);
console.log(mySelf);

console.log(myFather.language);
myFather.language = "English";
console.log(myFather.language);


// JavaScript Object.assign()
// The Object.assign() method copies properties from one or more source objects to a target object.
// Object.assign(target, source)
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
Object.assign(person2, person1);
console.log(person2);

const person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person4 = {firstName: "Anne",lastName: "Smith"};


Object.assign(person3, person4);
console.log(person3);
console.log(person4);

// JavaScript Object.entries()
// ECMAScript 2017 added the Object.entries() method to objects.
// Object.entries() returns an array of the key/value pairs in an object:

text = Object.entries(person3);
console.log(text);

// JavaScript Object.fromEntries()
// The fromEntries() method creates an object from a list of key/value pairs.

const fruits = [
    ["apple", 300],
    ["banana", 200],
    ["orange", 300],
];

console.log(fruits);

console.log(Object.fromEntries(fruits));

// JavaScript Object.values()
// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

text = Object.values(person3);

for (t of text) {
    console.log(t);
}
// JavaScript Object.groupBy()

const fruits1 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({quantity}) {
    return quantity < 200 ? "ok" : "low";
  }
  
  // Group by Quantity
const result = Object.groupBy(fruits1, myCallback);
console.log(result);

// JavaScript Object.keys()
// The Object.keys() method returns an array with the keys of an object.
const keys = Object.keys(person2);
console.log(keys);


// Array object Mixedup access 
let arr = [10,20,["apples", "bananas"],3];
console.log(arr[2][1]);


arr = [10,20,["apples", "bananas", ['a','b','c']],3];
console.log(arr[2][2][1]);


arr = [10,20,["apples", "bananas", {name:"asad", age:20}],3];

console.log(arr[2][2].name);
console.log(arr[2][2]["name"]);

arr = [10,20,["apples", "bananas", {name:"asad", age:20, ar1: ["e", "f", "g"]}],3];

console.log(arr[2][2]["ar1"][1]);
console.log(arr[2][2].ar1[1]);

// undefined: if not value assign in the varibael this varibale value is undefined 
var a;
console.log(a);
console.log(a==undefined ? "undefined" : "Not Undefined");

var b = null;
console.log(b);

//null and undefined value are same by types are different
console.log(null == undefined);
console.log(null === undefined);

// emtpy value 
var c = "";
console.log(c);//print empty

//NaN: If we doing wrong mathematical operations operation returns NaN
console.log(34/"dds");

// Note: NaN and "" not equal by value or types 

// Primitive and Reference Types
// Numbers, String, Boolean are premitive types
// Primitive types deals with value 

a = 10;
b = a;
a = 45;

console.log(b);

// Object and Array are Reference types
var arr2 = [3,5,9];
var arr3 = arr2; 

console.log(arr3);

arr3[2]= 10;
arr2[1]= 1;
console.log(arr3);
console.log(arr2);


var ob1 = {
    name: "foo",
    age : 34,
    village : "vil"
}

var ob2 = ob1;

ob1.name = "bar";
console.log(ob1);
console.log(ob2);