// Symbol Operator 
// In JavaScript, the Symbol is a built-in primitive data type introduced in ES6 (ECMAScript 2015). It represents a unique and immutable identifier, often used for creating properties on objects that are guaranteed to be unique, even if they have the same name as other properties.

// Each symbol created using Symbol() is guaranteed to be unique. Even if two symbols have the same description, they are not the same.

let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

console.log(sym1 === sym2); // false

// Symbols as Object Properties
// Symbols are often used as unique property keys for objects. This prevents accidental overwriting of properties, as symbols are always unique.

// Use Cases for Symbols
// Unique Object Properties: You can use symbols to ensure that property keys are unique and won’t conflict with other properties.

// Avoid Property Name Collisions: Symbols can prevent name collisions when adding properties to objects, especially when extending third-party libraries or built-in objects.

// Iteration and Hidden Properties: Properties keyed by symbols are not enumerable in for...in loops or Object.keys(), so they can be used to create "hidden" properties.

let obj = {
    [Symbol('hidden')]: 'secret',
    name: 'public'
  };
  
  for (let key in obj) {
    console.log(key); // logs 'name', but not the Symbol property
  }
let symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(hidden)]
console.log(obj[symbols[0]]); // 'secret'
