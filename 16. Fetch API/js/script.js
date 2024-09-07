// Set setTimeout function
// Set timeout function wait number of milliseconds for execute but at the same time
// other program are run 
// setTimeout function call automatically

setTimeout(function () {
    console.log("Hello world!");
}, 3000);

function getMessage() {
    setTimeout(function () {
        console.log("Message");
    }, 4000);
}

function getMessageLong() {
    setTimeout(function () {
        console.log("Message After Long Time");
    }, 1000);
}



getMessage();
getMessageLong();
// console.log("Other Progam are running");


// let persons = [
//     {firstName: 'Abdullah', lastName: 'Abdur Rahnam'},
//     {firstName: 'Obaydur', lastName: 'Rahman'}
// ]

// function getPerson(persons){
//     let output="";
//     setTimeout(function(){
//         persons.forEach(function(value){
//             output += value.firstName + " " + value.lastName + "<br>";
//         });
//         document.getElementById("output").innerHTML = output;
//     },1000)
// }

// function addPerson(person){
//     setTimeout(function(){
//         persons.push(person);
//     },4000)
// }
// // New new elment not pring here because of sychronous behaviour in prgramming. For eliminate it we need to asychronous programming
// addPerson({firstName: 'Abul', lastName: 'Kalam'});
// getPerson(persons)


console.log("Other Progam are running");


let persons = [
    { firstName: 'Abdullah', lastName: 'Abdur Rahnam' },
    { firstName: 'Obaydur', lastName: 'Rahman' }
]

function getPerson() {
    let output = "";
    setTimeout(function () {
        persons.forEach(function (value) {
            output += value.firstName + " " + value.lastName + "<br>";
        });
        document.getElementById("output").innerHTML = output;
    }, 500)
}

function addPerson(person, getPerson) {
    setTimeout(function () {
        persons.push(person);
        getPerson();
    }, 2000)
}
//Asychronous way to solve the problem
addPerson({ firstName: 'Abul', lastName: 'Kalam' }, getPerson);


// Promises In Js 
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

// JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming code:

// Syntax
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );


// When the producing code obtains the result, it should call one of the two callbacks:

// Promise Object Properties
// A JavaScript Promise object can be:
// Pending = 	undefined
// Fulfilled = a result value
// Rejected = 	an error object

// Promise How To
// Here is how to use a Promise:
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// Ex: 
let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("prom_out").innerHTML = value;
});



function getPerson() {
    let output = "";
    setTimeout(function () {
        persons.forEach(function (value) {
            output += value.firstName + " " + value.lastName + "<br>";
        });
        document.getElementById("output").innerHTML = output;
    }, 500)
}

function addPerson(person, getPerson) {
    let prom = new Promise(function (resolve, reject) {
        let state = false;

        if (state == false) {
            resolve();
        } else {
            reject(new Error("Promise not accepted"));
        }
        persons.push(person);
        //If resolve function can called it executes the promise successfully

    });

    return prom;
}
//Asychronous way to solve the problem
addPerson({ firstName: 'Abu', lastName: 'Huraira' }).then(getPerson).catch(function (error) {
    console.error(error.message);
});

// Example using Promise: Waiting for a file

// let prom = new Promise(function(myResolve, myReject){
//     let req = new XMLHttpRequest();
//     req.open('GET', 'car.txt', true);

//     req.onload = function(){
//         if(req.status===200){
//             myResolve(req.responseText);
//         }else{
//             myReject(new Error("Promise not accepted"));
//         }
//     }

// })

// function myDisplayer(some) {
//     document.getElementById("prom_out2").innerHTML = some;
// }

// prom

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   let myPromise2 = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "myCar.html",true);
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });

//   myPromise2.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );



//Fetch API 
// Fetch like AJAX, this uses javascript promise

document.getElementById('get_jokes').addEventListener('click', getJokes);

function getJokes() {
    //fetch function returns a promise thats why we called then
    fetch('https://api.api-ninjas.com/v1/jokes/', {
        headers: {
            'X-Api-Key': 'f88n0jSzxJ9hdDCDlU8p/A==wrX6uj9eqGVhzao2'
        }
    })
        .then(response =>  response.json())
        .then(data => document.getElementById('showJokes').innerText=(data[0].joke))
        .catch(err => document.getElementById('showJokes').innerText=err.message)
}