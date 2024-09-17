// Storage API 
// There are two types of storage APIs
// Local Storage: 
// The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
// The data is stored with no expiration date, and will not be deleted when the browser is closed.
// The data will be available for days, weeks, and years.


// Session Storage:
// The localStorage.setItem() method stores a data item in a storage.
// It takes a name and a value as parameters:


// Storage API 
// The localStorage Object
// The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
// The data is stored with no expiration date, and will not be deleted when the browser is closed.
// The data will be available for days, weeks, and years.


let email = document.getElementById('email');
let uName = document.getElementById('name');

let form = document.querySelector('form');

document.getElementById('btnSubmit').addEventListener('click',function(e) {
    if (email.value == '' || uName.value == ''){
        alert('Filled Required');
    }else{
       setLocalStorage(uName.value, email.value);
    }
    e.preventDefault();

    email.value = '';
    uName.value = '';
    e.preventDefault();
})

document.getElementById('fetchData').addEventListener('click',function(e) {
    console.log('Fetching data: ',localStorage.getItem('Name'), localStorage.getItem('Email'));
    e.preventDefault();
});

function setLocalStorage(name, email) {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    e.preventDefault();
}

document.getElementById('removeName').addEventListener('click',function(e) {
    localStorage.removeItem('Name');
    e.preventDefault();
});
document.getElementById('removeEmail').addEventListener('click',function(e) {
    localStorage.removeItem('Email');
    e.preventDefault();
});
document.getElementById('clearData').addEventListener('click',function(e) {
    localStorage.clear();
});