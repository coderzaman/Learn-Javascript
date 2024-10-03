// We can redeclared variable before declared with var
// It can create a serious problem in programming execution
var a = 10;
a = a + 7;

console.log(a);

var a = 10;
console.log(a);

// We can solve the problem declared variable with let 
let b = 10;
b = 30;
console.log(b);

// let b = 39; // Cause create error

//When we create variable with const it can't be redeclared or reassigned
const c = 10;

// Casuse an error
// c  = 45;
//const c = 15;

console.log(c);


//Scope 
// Local Scope 

var p = 4;
let q = 16;
const r = 32;

console.log("Global Scope: ", p, q, r);

var x = 10;

function test() {
    var p = 2;
    let q = 8;
    const r = 12;
    x = 10;
    // We can access the global scope variable from the local scope
    console.log("Local Scope: ", p, q, r, x);

    var z = 39;
}

test();

if(true){
    // When we declared variable with var in if scope which redeclared before.
    // And reassign here here it can also be change in global scope
    // But let and const can not be changed in global scope
    var p = 2;
    let q = 8;
    const r = 12;
}

console.log("Global Scope: ", p, q, r);
//But you can not acces local scope value from  
// console.log(z);

// for scope work same as if scope

for(var i = 2; i <=10;i++){
    console.log(i);
}

console.log(i);

