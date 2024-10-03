// Array Destructuring

let fruits = ["Apple", "Banana", "Cherry", "Date"];

// If you need access elements from we can follow
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 =fruits[2];

console.log(`Fruits: ${fruit1}, ${fruit2}, ${fruit3}`);

// but we array destructuring we can access array elements like array variables

// If you can access to elements exceed array this returns udefined

var [frt1, frt2, frt3, frt4, frt5] = fruits;
console.log(`Fruits: ${frt1}, ${frt2}, ${frt3}, ${frt4}, ${frt5}`);


// Now if we need array exclude some array Element we can access like that

var [frt1, frt2, , frt4 ] = fruits;
console.log(`Fruits: ${frt1}, ${frt2}, ${frt4}`);


// Swap array value
// tradional way 
console.log(fruits);
let temp =fruits[0];
fruits[0] = fruits[1];
fruits[1] = temp;

console.log(fruits);

// We can also swap value following technique 
[fruits[0], fruits[1]] = [fruits[1], fruits[0]];
console.log(fruits);


