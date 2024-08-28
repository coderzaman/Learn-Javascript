// Operator
// a character or group of characters that tells the compiler or interpreter to perform a specific action
// Arithmetics Oprators: + - * / %

var x = 10;
var y = 39;

console.log(x+y);
console.log(y-x);
console.log(x*y);
console.log(y/x);
console.log(x%y);


var z = x + y;
console.log(z);


// Exponential Operator
x = 2**2;
console.log(x);

// increment and decrement
var a = 30;
var b = 20;


console.log(a++);
console.log(++b);

console.log(a);

//First assign the value in b thne increment a value
c = a++;
console.log(c);
console.log(a);

//Fist increment value then assign the value
c = ++b;
console.log(c);
console.log(b);

// precedence of aritmethic equation
// () = > first 
// ^ => second
// / * => third
// + - => fourth

var eq = 8 + 3 - 4 * 3 / 2 ** 2
console.log(eq);


// String Operator: 

// concat tow String

var word1 = "Hello, ";
var word2 = "World";

var word3 = word1 + word2;
console.log(word3);

// It concating follow left right. If possible to adding and
// subtraction or any other aritmethic operation it calculate it then concat with string

var word4 = 10 - 3 + 3 + "hello world";
console.log(word4);

var word5 = 8 + 3 - 4 * 3 / 2 ** 2 + " world";
console.log(word5);

//If not any scope to operate arithmetic operations it concat with string

word5 = "hello world" + 8 + 3;
console.log(word5);

//If two string is a number it doing substraction operations
word5 = "23" - "2";
console.log(word5);

word5 = "23" - 3;
console.log(word5);


word5 = "23" + 3;
console.log(word5);

// If one operand a char and operate with sub operation result will be not a number

word5 = "d" - 3;
console.log(word5);

// Conditional Operators
// Comparison operators can be used in conditional statements to compare values and take action depending on the result:
// Result will be of comparison operation is either true or false
//Comarison opeator are: ==, ===, !=, !==, >, <, <=, >=

var x = 3;
var y = "3";
//== operator check  one the value is equal or not. if equal it can be true otherwise false
console.log(x==y);

//=== operator check value and type. if equal it can be true otherwise false
console.log(x===y);

x = 4;
y = 4;
console.log(x==y);

// != operator check the value in not equal to other operator. It check only value not type
x = 3;
y = 4;

console.log(x!=y);


// != operator check the value in not equal to other operator. It check value and type both
x = 3;
x = "3";
y = 3;
console.log(x!=y);
console.log(x!==y);

// compare with two number greter than equal or greater, less then equal or less
console.log(x>=y);
console.log(x>y);
console.log(x<=y);
console.log(x<y);



// Logical Operators
// Logical operators are used to determine the logic between variables or values.
x = 6;
y = 3;

console.log(x < 10 && y > 1);
console.log((x == 5 || y == 5));
console.log((x == 5 || y == 3));
console.log((x == 6 && !(y == 3)));

// Conditional (Ternary) Operator
// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
age = 32;
let voteable = (age < 18) ? "To Young"  : "Old enough";
console.log(voteable);


//Compare with tree number;
let p = 34;
let q = 42;
let r = 42;

let maxNumb = (p >= q) ? (p >= r) ? "P is greater": "R is greater" : (q >= r) ? "Q is greater" : "R is greater";

console.log(maxNumb);

// Assignment Operator
// Assignment operator are =, +=, -=, *=, /=,%=, **==

x = 10;
x += 10;
console.log(x);
x -= 10;
console.log(x);
x *= 10;
console.log(x);
x /= 10;
console.log(x);
x %= 10;
console.log(x);
x = 2;
x **= 10;
console.log(x);


// Excercise

var celTemp = prompt("Enter your temperature in celcius");
var farenheit = 1.8 * celTemp + 32;
alert("Farenheit: " + farenheit);
console.log("Task Complete");
