let selectListHead =  document.querySelectorAll("h5");

selectListHead.forEach(function(value){
    value.classList = "text-bg-danger py-2 fs-4 mb-0 mt-5 text-center" 
})

let selectOlList = document.querySelectorAll("ol");
selectOlList.forEach(function(value){
  value.style.borderRadius = "0px";  
})

let selectULList = document.querySelectorAll("ul");
selectULList.forEach(function(value){
  value.style.borderRadius = "0";  
})


// Create Element 
let formHead = document.createElement("h5");
formHead.appendChild(document.createTextNode("Input your details..."));
console.log(formHead);
formHead.classList = "fs-4 py-2 text-bg-danger text-center mb-0";

let seletctForm = document.querySelector("form");
seletctForm.style.padding = "20px";
seletctForm.style.border = "1px solid lightgray";

let formSec = document.querySelector(".from-sec");

//If you want to add any element as first element we can use insertBefore
// for Example

// section.insertBefore(elementAddAsFirst, currentFirstChile);
// formSec: The parent element where you want to insert formHead.
// formHead: The element you want to insert.
// formSec.firstChild: The reference node, i.e., the current first child of formSec. By passing formSec.firstChild,

formSec.insertBefore(formHead, formSec.firstChild);

let styleAncor = document.querySelectorAll("a");

styleAncor.forEach((value)=>{
    value.style.color = "black";
    value.style.textDecoration = "none";
    
    value.addEventListener("mouseover", () => {
        value.style.color = "blue"; 
    });

    value.addEventListener("mouseout", () => {
        value.style.color = "black"; 

    });

})


// Add new Element Again 
let createLi= [];
selectULList = document.querySelector('ul');
for(let i = 1; i <= 5; i++) {
    createLi[i] = document.createElement("li");
    createLi[i].appendChild(document.createTextNode(`New  added Item-0${i}`));
    createLi[i].classList = "list-group-item"; 
    selectULList.appendChild(createLi[i]);
}


// Remove Element 
let selectULListLi = document.querySelectorAll("ul li");
selectULListLi[9].remove();


//Remove child elements

//Select Child Elements
selectULListLi = document.querySelectorAll("ul li");
//Select Parent Elements
selectULList = document.querySelector('ul');
selectULList.removeChild(selectULListLi[5]);


