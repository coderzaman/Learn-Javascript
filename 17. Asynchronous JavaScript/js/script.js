// Synchronous Program Example
// Warnng: Comment other example when run one
// Exaample: 
const porcessOrder = (customer) =>{
    console.log(`Procesing order cutomer ones`);

    var currentTime = new Date().getTime();
    while(currentTime+3000 >= new Date().getTime());

    console.log(`Order Processed For Customer 1`);
}

console.log(`Take Order For Customer 1`);
porcessOrder();
console.log(`Order complete For Customer 1`);

// When javascript code run in the browser firstly convert it to machine Language then browser can recognize it

// For machine Language converting browser have some mechanism to convert. Browser Have to things for convert code to machine Language

// 1 Runtime Environment(window.something, document.something that comes from runtime environment)

// 2 Engine (different browser has diffent engine)
// V8 Engine: Google Chrome and Node.js
// Developer: Google

// SpinderMonkey: Mozilla Firefox
// Developer: Mozilla

// Chakra (Internet Explorer and Edge's original engine)
// Developer: Microsoft


// In Engine There is tow things: 
// 1. Call Stack

// When this program excutes and calls the processOrder function. In pressOrder function there is while loop
// While loop will continue 3 seconds. When it run javascript block all browsers activity for three seconds. Its called javascript blocking behaiviour

// For Solving Blocking Behaivor we can use setTimeout function

//Asynchronous Programming

// Exaample: 
const porcessOrder = (customer) =>{
    console.log(`Procesing order cutomer ones`);

    setTimeout(()=> console.log('Orderd Completed'),3000);

    console.log(`Order Process For Customer 1`);
}

console.log(`Take Order For Customer 1`);
porcessOrder();
console.log(`Complete Order for Customer 1`);


//Previous Example
// When javascript engine see a build in asynchronous function setTimeout() in call stack it instantly pass it call stack to WEB APIs and other program run continously

// JavaScript run it all works and finally removes the main() function from Web APIs 

//Now when setTimeout() function time 3000s elapse it pass to Web APIs to Callback Queue 
// There something called Event loop in Callback Queue(FIFO)
// In callback queue no of call back function store here using follow queue data stuctures

//When event loop sees call stack is empty and somehting in callback queue then run the event loop pass the first function to callstack. Then call stack finished it execution

// When it run we can not control asychornous function when it can be run. For solve the proble we can use callback function for control the order of execution

// Call Back function

// Exaample: 
const takeOrder = (customer, callback) =>{
    console.log(`Take Order For ${customer}`);
    callback(customer);
}

const porcessOrder = (customer, callback) =>{
    console.log(`Procesing order ${customer}`);

    setTimeout(()=> {
        console.log('Orderd Completed');
        callback(customer);
    },3000);

    console.log(`Order Processed For ${customer}`);
}

const completeOrder = (customer) =>{
    console.log(`Complete Order For ${customer}`);
}


takeOrder('Abdur Rahman', (customer)=>{
    porcessOrder(customer, (customer)=>{
        completeOrder(customer);
    })
} )

// Exaample: 
const takeOrder = (customer) =>{
    console.log(`Take Order For ${customer}`);
    porcessOrder(customer);
}

const porcessOrder = (customer) =>{
    console.log(`Procesing order ${customer}`);

    setTimeout(()=> {
        console.log('Orderd Completed');
        completeOrder(customer);
    },3000);

    console.log(`Order Processed For ${customer}`);
}

const completeOrder = (customer) =>{
    console.log(`Complete Order For ${customer}`);
}


takeOrder('Abdur Rahman');

console.log("Hello");

//Test
// let processOrder = (customer, callback) =>{
//     console.log(`Processing Order for ${customer}`);
//     setTimeout(()=>{
//         console.log(`Order Completed for ${customer}`);
//         callback(customer);
//     },3000)
// }


// let completeOrder = (customer) =>{
//     console.log(`Complete Order for ${customer}`);
// }

// const takeOrder = (customer, callback) => {
//     console.log(`Take Order for ${customer}`);
//     callback(customer);
// }

// const processOrder = (customer, callback) => {
//     console.log(`Processing Order for ${customer}`);
//     setTimeout(function () {
//         console.log(`Cook Completed for ${customer}`);
//         console.log(`Order Prossed for ${customer}`);
//         callback(customer);
//     }, 3000);

// }

// let completeOrder = (customer) => {
//     console.log(`Complete Order for ${customer}`);
// };

// takeOrder("Abdur Rahman", (customer) => {
//     processOrder(customer, (customer) => {
//         completeOrder(customer);
//     });
// });
//We doing previous program asynchronous way
// If there is more task on the program it goint to many nested block. Whcih call callback hell. For solve the problem we can promise


// Promises: Promises is JavaScript like real life promise. Sometime we fullfillment our pormise sometimes fail to fullfilllment promise.

// In JavaScript we  keep our promise which call resolve and can not keep call rejected. 

// Promise use solve for asynchronous problem. We can also use promise for pause code block for few times 

// Promise run asynchronously 
// Create Promise with using Promise object
// Promise object takes a anno anonymous function. Anonymous function take to make name resolve and reject
// If promise is sucess resolve function call if not reject function are called
// Exaample: 
const hassMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hassMeeting) {
        const meetingDetails = {
            name: "Technical Meetings",
            location: "Google Meet",
            time: "08:00 AM"
        }
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting Already Sheduled"));
    }

});
// If javascript sees promise instantly skip this promise and go to the next code. After promise fulfillment the promise block is run
meeting
.then((res) => {
    console.log(JSON.stringify(res));
})
.catch((err)=>{
    console.log(err.message);
})


// Multiple Promise Block 
// Exaample: 
let hassMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if (!hassMeeting) {
        const meetingDetails = {
            name: "Technical Meetings",
            location: "Google Meet",
            time: "08:00 AM"
        }
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting Already Sheduled"));
    }

});


const addToCalendar = (meetingDetails)=>{
    let calendar =  `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
}

meeting
.then(addToCalendar)
.then((res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err.message);
})


// Promise Exceution order 
// Exaample: 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 Completed");
    }, 3000)
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Promise2 Completed");
});

promise1
.then((res)=>{console.log(res)});

promise2
.then((res)=>{console.log(res)});


// If want to all promise in the smae time
 
Promise.all([promise1, promise2]).then((res)=>{console.log(res)});


// If want to execute faster one promise from multiple then we used
// Promise.race(arr) 

Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
})

// Using a lot of .then() for handling asynchronous code (like with promises) can become cumbersome and difficult to read or maintain in large projects. The async-await pattern was introduced to make asynchronous code easier to write and understand. It allows you to write asynchronous code in a more "synchronous" style, making it easier to read and maintain.
// async: Declares an asynchronous function that automatically returns a promise. This allows you to use await inside the function.

// await: Pauses the execution of the function until the promise is resolved. This allows you to write asynchronous code in a more synchronous way.

// try-catch: Used to handle errors, similar to .catch() in the .then() chain.
// Exaample: 
let hassMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if (!hassMeeting) {
        const meetingDetails = {
            name: "Technical Meetings",
            location: "Google Meet",
            time: "08:00 AM"
        }
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting Already Sheduled"));
    }

});


const addToCalendar = (meetingDetails) => {
    let calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calendar);
}

// we skip this code

// meeting
// .then(addToCalendar)
// .then((res) => {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// Write synchronous code in asynchronous way 

async function myMeeting() {
    //Awate function wait until excution of meeting()
    try {
        const meetingDetails = await meeting;
        const calendar = addToCalendar(meetingDetails);
        console.log(calendar);
    }catch (err) {
        console.log(err.message);
    }
    
}

myMeeting();
