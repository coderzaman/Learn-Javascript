// Promises
// Successful -> resolve
// Failure -> reject

let prom = new Promise((resolve, reject) => {
    a = 1 + 1;
    if (a === 2) {
        resolve("Successful");
    }
    reject("Failed");
});


prom.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

// It use when we need large number of file from server. When it executes other code execution work as well
console.log("After Promises");


// Promis run asyncronously

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1 + 1;
        if (a === 2) {
            resolve("Successful 2nd");
        }
        reject("Failed");
    }, 2000)
});


prom2.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

console.log("After 2nd Promises");

// Fetch 
// fetch return a promise


// fetch('https://api.github.com/users/coderzaman')
//     .then(response => {
//         console.log(response.json());
//     })
//     .catch(err=>{
//         console.log(err);
//     })


// feth API with async function



// fetchApi().then(response => {
//     console.log(response.bio);
// });

async function fetchApi(file){
    let fetachObject = await fetch(file);
    
    let fetchUser = await fetachObject.json();
    return fetchUser;
}
async function getUser(){
    let user = await fetchApi('https://api.github.com/users/coderzaman');
    console.log("here:", user);
    
    if(user.message != "Not Found"){
        console.log(user.login);
    }

}
getUser();
