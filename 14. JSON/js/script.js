// JSON(JavaScript Object Notation)
// Data format for exchanging data between systems running on different technology
/*  এর  মানে  হচ্ছে আমাদের যখন দুইটি ভিন্ন সিস্টেম লাইক দুটি ওয়েবসাইট এর মধ্যে ডাটা এক্সচেঞ্জ করলে দুটিতে সাপোর্ট করে এরকম একটা ডাটা ফরমেট লাগে। আর সেটি হচ্ছে  জেসন ডাটা ফরমেট। xml এর সাহায্যেও এটি করা যাই।  তবে জেসন বেশি সহজ।  পাইথন, পিএইচপি, জাভাস্ক্রিপ্ট, জাভাতে জেসন ব্যবহার করা যায়। */

// Has similarity with JavaScript Object
// Properties are wrapped with " "
// JavaScript Object:
//{name: "Abdullah", age:22, hometown:"Dhaka"}
// JSON Data:
// {"name":"Abdullah", "age":22, "hometown":"Dhaka"}


// JavaScript Object
let students = {
    name : "Abdullah",
    age : 22,
    homeTow: "Dhaka"
}


// JSON Object
let students_json = {
    "name": "Abdullah",
    "age": 22,
    "homeTown": "Dhaka"
}


console.log(students);
console.log(students_json);


// JavaScript Object to JSon Object JSON.stringify(js_ob)
students_json = JSON.stringify(students);
console.log(students_json);


// JSON object to js Object JSON.parse(json_obj)
students = JSON.parse(students_json);
console.log(students);

//Json Validator https://jsonlint.com/

// Json Support DataTypes:
//String 
// Numbers 
// Object(JSON Object) 
// array
// boolean 
// null  

// JSON Does not support Date, undefined, and function 


var person = {
    name: "Abdullah",
    age: 25,
   // dob: 1998-04-13,
    married: false,
    test: null,
    test_undefined: undefined,
    greet: function(){
        console.log(`Hello, ${person.name}`);
    }
}

// if we convert it test_undefined, dob and greet function convert have some error
let json_obj = JSON.stringify(person);
console.log(json_obj);


var person = {
    name: "Abdullah",
    age: 25,
    dob: "1998-04-13",
    married: false,
    test: null,
    test_undefined: undefined,
    arr: [1,32,34,23,4],
    pdetails: {
        parentName: "Abdur Rahman",
        age: 60,
        homeTown: "Cox's Bazar"
    }
}


json_obj = JSON.stringify(person);
console.log(json_obj);


// If we want to write json object in javascript, javascript treat it as js object
person = {
    name: "Abdullah",
    age: 25,
    dob: "1998-04-13",
    married: false,
    test: null,
    arr: [1,32,34,23,4],
    pdetails: {
        parentName: "Abdur Rahman",
        age: 60,
        homeTown: "Cox's Bazar"
    }
}

let person1 = {
    "name": "Abdullah",
    "age": 25,
    "dob": "1998-04-13",
    "married": false,
    "test": null,
    "arr": [1,32,34,23,4],
    "pdetails": {
        parentName: "Abdur Rahman",
        age: 60,
        homeTown: "Cox's Bazar"
    }
}
console.log(person);
console.log(person1);

// person1 = JSON.parse(person1); // show error because of js treat it as js object
//If convert Javascript write JSON to JSON object we can first convert it to JSON object then javascript object
person1 = JSON.stringify(person1);
person1 = JSON.parse(person1);
console.log(person1);


//Code for fetch json data from server or external file
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        jsonData(data);
    }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(data) {
    
    let  jsObjets = JSON.parse(data);

    

    for (json_obj in jsObjets){
       let arr =  jsObjets[`${json_obj}`];
       
       for(eacindex in arr){
            eachOb = arr[eacindex];
            for(valueindex in eachOb){
                console.log(eachOb[`${valueindex}`]);
            }
       }
    }
    
}