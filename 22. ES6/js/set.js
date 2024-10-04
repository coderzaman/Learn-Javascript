// Set: We can not assign duplicate values

let set = new Set([1, 2, 3,3]);
set.add(4);
set.add(5);
console.log(set);

set.delete(1);
console.log(set);

// has function ensure value exists in set or not

console.log(set.has(1));
console.log(set.has(2));
// set.clear(); // remove all set Items

// Iterate set 

for( x of set){
    console.log(x);
}

// Itrate set keys and values
// set keys and values are same
console.log("set keys");
for( x of set.keys()){
    console.log(x);
}

console.log("set values");
for( x of set.values()){
    console.log(x);
}


console.log("set Iterator");
let iter = set.entries();
console.log(iter.next().value[0]);
console.log(iter.next().value[0]);
console.log(iter.next().value[0]);


console.log("Loop with iterators");
iter = set.entries();
for ([x] of iter){
    console.log(x);
}
console.log("Loop with Foreach");
set.forEach((keys, values) => console.log(values,keys));

