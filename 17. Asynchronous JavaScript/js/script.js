// Synchronous Program Example

// const porcessOrder = (customer) =>{
//     console.log(`Procesing order cutomer ones`);
    
//     var currentTime = new Date().getTime();
//     while(currentTime+3000 >= new Date().getTime());
    
//     console.log(`Order Processed For Customer 1`);
// }

// console.log(`Take Order For Customer 1`);
// porcessOrder();
// console.log(`Order complete For Customer 1`);

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
// const porcessOrder = (customer) =>{
//     console.log(`Procesing order cutomer ones`);
    
//     setTimeout(()=> console.log('Orderd Completed'),3000);
    
//     console.log(`Order Process For Customer 1`);
// }

// console.log(`Take Order For Customer 1`);
// porcessOrder();
// console.log(`Complete Order for Customer 1`);

 
//Previous Example
// When javascript engine see a build in asynchronous function setTimeout() in call stack it instantly pass it call stack to WEB APIs and other program run continously

// JavaScript run it all works and finally removes the main() function from Web APIs 

//Now when setTimeout() function time 3000s elapse it pass to Web APIs to Callback Queue 
// There something called Event loop in Callback Queue(FIFO)
// In callback queue no of call back function store here using follow queue data stuctures

//When event loop sees call stack is empty and somehting in callback queue then run the event loop pass the first function to callstack. Then call stack finished it execution

// When it run we can not control asychornous function when it can be run. For solve the proble we can use callback function for control the order of execution

// Call Back function

// const takeOrder = (customer, callback) =>{
//     console.log(`Take Order For ${customer}`);
//     callback(customer);
// }

// const porcessOrder = (customer, callback) =>{
//     console.log(`Procesing order ${customer}`);
    
//     setTimeout(()=> {
//         console.log('Orderd Completed');
//         callback(customer);
//     },3000);
    
//     console.log(`Order Processed For ${customer}`);
// }

// const completeOrder = (customer) =>{
//     console.log(`Complete Order For ${customer}`);
// }


// takeOrder('Abdur Rahman', (customer)=>{
//     porcessOrder(customer, (customer)=>{
//         completeOrder(customer);
//     })
// } )

// const takeOrder = (customer) =>{
//     console.log(`Take Order For ${customer}`);
//     porcessOrder(customer);
// }

// const porcessOrder = (customer) =>{
//     console.log(`Procesing order ${customer}`);
    
//     setTimeout(()=> {
//         console.log('Orderd Completed');
//         completeOrder(customer);
//     },3000);
    
//     console.log(`Order Processed For ${customer}`);
// }

// const completeOrder = (customer) =>{
//     console.log(`Complete Order For ${customer}`);
// }


// takeOrder('Abdur Rahman');

// // console.log("Hello");


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

const takeOrder = (customer, callback) =>{
    console.log(`Take Order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback)=>{
    console.log(`Processing Order for ${customer}`);
    setTimeout(function(){
        console.log(`Cook Completed for ${customer}`);
        console.log(`Order Prossed for ${customer}`);
        callback(customer);
    },3000);
    
}

let completeOrder = (customer) => {
    console.log(`Complete Order for ${customer}`);
};

takeOrder("Abdur Rahman" , (customer)=>{
   processOrder(customer, (customer)=>{
        completeOrder(customer);
   });
});
//We doing previous program asynchronous way
// If there is more task on the program it goint to many nested block. Whcih call callback hell. For solve the problem we can promise
