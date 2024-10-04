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

let a = Symbol();

let person = {
  name: "Abdullah",
  age: 25,
  [a]: "Hdden"
}


console.log(person);

// Symbol are not generally member of the Object
console.log(Object.getOwnPropertyNames(person, 'name'));

// Access symbols from the Object
console.log(Object.getOwnPropertySymbols(person));

// If you chek either symbol is object property or not
console.log(Object.keys(person));
console.log(JSON.stringify(person));

for (p in person) {
  console.log(person[p]);
}


// Symbol Iterator 
let iterable = "Hello, world!";

// Symbol.iterator
let iter = iterable[Symbol.iterator]();

let arr = [10, 20, 40, 50, 54];
iter = arr[Symbol.iterator]();
console.log(iter.next().value);
console.log("Hello, world!");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Make a custome iterator


function customeIterator(arr) {
  let index = 0;

  return {
    next: function () {
      return index < arr.length ? { value: arr[index++], done: false } : { value: undefined, done: true };
    }
  }
}

iter = customeIterator(arr);
console.log(iter.next());
console.log(iter.next());

// Generators: It is also types of iterators

function* generator(){
  yield 1;
  yield 2;
  yield "Abdullah",
  yield "Abdur Rahman"
}

let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* generator2(){
  yield 1;
  console.log("Hello world!");
  console.log("Hello world!");
  console.log("Hello world!");
  yield 2;
  yield "Abdullah",
  yield "Abdur Rahman"
}


let gen2 = generator2();

// it print also statements befor another yeiled 
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);