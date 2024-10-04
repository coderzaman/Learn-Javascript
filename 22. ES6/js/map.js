// Map is data structure where value are stored in key/value pairs
// Like Object 
// In set key and value are same but in map keys and values not need to be same


// declare map 

let map = new Map([
    ["Name", "Abdullah"],
    ["Age", 26]
]);

// Add item in map with set Function(key, value)
map.set("dob", "1998-10-23");

console.log(map);

//Get Item value from map
console.log(map.get("Name"));

//Chek key exists in map
console.log(map.has("Name"));
console.log(map.has("Location"));

// Iterate Map 

//print each item key value pair
for( x of map){
    console.log(x);
}

// print key and value 
for([x,y] of map){
    console.log(x,y);
}

// print only key 
console.log("\nPrint only key");
for(x of map.keys()){
    console.log(x);
}


console.log("\nPrint only values");
for(x of map.values()){
    console.log(x);
}

//print each item with entries
console.log("\nPrint map item");
for(x of map.entries()){
    console.log(x);
}
console.log("\nPrint key value with entries()");
for([x,y] of map.entries()){
    console.log(x,y);
}

// map to array 
console.log("\nMap to array key value(items)");
let arr = Array.from(map);
console.log(map);

console.log("\nMap to array key");
arr = Array.from(map.keys());
console.log(arr);

console.log("\nMap to array value");
arr = Array.from(map.values());
console.log(arr);


console.log("\nIterate with foreach");
// In foreach 
// 1st parameter is: value
// 2nd parameter is: key
// 3rd parameter is: whole map

map.forEach((value, key,map) => {
    console.log(key,value,map);
});