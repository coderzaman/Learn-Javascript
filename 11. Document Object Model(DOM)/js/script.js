// JavaScript HTML DOM
// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// The HTML DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects:


// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."


// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents

// What is the HTML DOM?
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements

// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


let val;
val = this;
//here this represents whold html document
console.log(val);
//this and window reperesent same things
console.log(window)

// document object represent page document. Here index.html
val = window.document;
console.log(val);

// we can acccess same thing only write only document object
console.log(document);

//If we want all documen as array document.all
console.log(document.all);

// if we want first element of this array 
console.log(document.all[0]);

// we can fetch also lenth of array
console.log(document.all.length);

//we can seel also exisiting elment present in this page
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.domain);
console.log(document.URL);
console.log(document.contentType);
console.log(document.forms);

//If we more then one forms we can access particular one with index
console.log(document.forms[0]);

// we can also access form method and action 
console.log(document.forms[1].action);
console.log(document.forms[0].method);

// we can also call all link of html page 
console.log(document.links);
// we can access a particular link
console.log(document.links[0]);

// we can also class of link 
console.log(document.links[0].className);   

// we can also script of document
console.log(document.scripts);

// we can access also particular one with index 
console.log(document.scripts[0]);

// we can alsso attribute of html document 
console.log(document.scripts[0].src);

// we can access attibute value with getAtrribute function
console.log(document.scripts[0].getAttribute("src"));

// we can not forEach loop DOP return array 
links = document.links;
// link.forEach(function(li) {console.log(li)}); // Error

// for this operation we need first convert to array 

let linkArr = Array.from(links);
linkArr.forEach(function(li) {console.log(li)});

// Dom Selector 
// Get the element with the specified id:

let head = document.getElementById("head_pro");
console.log(head);

// we can also access properties element 
console.log(document.getElementById("head_pro").id);
console.log(document.getElementById("head_pro").className);

// Note: If multiple element have same id, It will be access oly firstone 

// If we want to add css 
document.getElementById("head_pro").style.background = "blue";
document.getElementById("head_pro").style.padding = "10px";
document.getElementById("head_pro").style.color = "white";
// document.getElementById("head_pro").style.display ="none";

// changeing content 
document.getElementById("head_pro").textContent = "Programming Languages";
document.getElementById("head_pro").innerText = "Programming Language";
document.getElementById("head_pro").innerHTML = "<b>Programming Language</b>";

// we can also add varible and perform those operation 
let head_p = document.getElementById("head_pro");
head_p.style.fontFamily =  "Times New Roman";


// document.querySelector() also Get the element with the specified id:
// We can call element with querySelector() by id, className and name 

// using # for call with id 
head_p = document.querySelector("#head_pro");

// using . for call with className 
head_p = document.querySelector(".fs-4");

// we can tag with only tag name. querySelector access only first element of a
let lin = document.querySelector("a");
lin.style.textDecoration = "none";

// access parent child 
lin = document.querySelector("ol li");
console.log(lin);
 
lin.style.fontStyle = "italic";

// last child of tag 
lin = document.querySelector('li:last-child');
lin.style.fontFamily = "droid";

// access nth child 

lin = document.querySelector('li:nth-child(3)');
lin.innerText = "JavaScript";
lin.style.backgroundColor = "red";
lin.style.color = "white";
lin.style.fontWeight = "bold";


//Mutliple selectors 
//document.getElementsByClassName. It select all eelements of same class name
//We can access with index
let list = document.getElementsByClassName('item-change');
list[0].style.backgroundColor = "black";
list[0].style.color = "white";

list[1].style.backgroundColor = "black";
list[1].style.color = "white";

list[2].style.backgroundColor = "black";
list[2].style.color = "white";
let listEven = document.getElementsByClassName('item-change-even');
listEven[0].style.backgroundColor = "#202020";
listEven[0].style.color = "white";
listEven[1].style.backgroundColor = "#202020";
listEven[1].style.color = "white";


// document.getElementsByTagName select all same tagname as array
let headTag = document.getElementsByTagName('h5');

headTag[0].style.backgroundColor = "red";
headTag[1].style.backgroundColor = "blue";
headTag[1].style.color = "white"; 
headTag[1].style.padding = "10px";
headTag[1].style.fontFamily = "Times New Roman";
headTag[1].style.fontWeight = "bold";

// If we select the ol in li list we can use select ol for querySelector then select li with getElementsByTagName

// Here we can use use calss ol-a instead of ol beacuse it's second ol in our page

let olA = document.querySelector('.ol-a').getElementsByTagName('li');
console.log(olA);
olA[0].style.background = "red";
olA[0].querySelector('a').style.color = "white";
olA[1].style.backgroundColor = "blue";
olA[1].style.color = "white";
olA[1].querySelector('a').style.textDecoration = "none";
olA[1].querySelector('a').style.color = "white";


//olA = document.querySelector('.ol-a') when this line execute return an array but we can not use it. For it's array we need it to convert traditional array

olA = Array.from(document.querySelector('.ol-a').getElementsByTagName('li'));
let selector = 0;
olA.forEach(function(value){
    value.style.color = "white";
    if(selector % 2 == 0){
        value.style.backgroundColor = "black";
        value.querySelector('a').style.textDecoration = "none";
        value.querySelector('a').style.color = "white";
    }else{
        value.style.backgroundColor = "#202020";
        value.querySelector('a').style.textDecoration = "none";
        value.querySelector('a').style.color = "white";
    }

    selector ++;
});

// querySelectorAll also same getElementsByClassName or getElementsByTagName. But it gives 
// traditional array that's why we don't need convert it to an array
// querySelectorAll select all same element in 

let olB = document.querySelectorAll('ol li'); 
console.log(olB.length);
selector = 0;
olB.forEach(function(value){
    if(selector % 2 == 0){
        value.style.backgroundColor = "red";
    }else{
        value.style.backgroundColor = "blue";
    }
    selector ++;
});

olB = document.querySelectorAll('.ol-1 li'); 
console.log(olB.length);
selector = 0;
olB.forEach(function(value){
    if(selector % 2 == 0){
        value.style.backgroundColor = "black";
    }else{
        value.style.backgroundColor = "#202020";
    }
    selector ++;
});

// we can select even and item with querySelectorAll 

olB = document.querySelectorAll('.ol-1 li:nth-child(odd');
console.log(olB.length); 
olB.forEach(function(value){
   value.style.backgroundColor = "#ff5733";
});

olB = document.querySelectorAll('.ol-1 li:nth-child(even)');
console.log(olB.length);

olB.forEach(function(value){
    value.style.backgroundColor = "#c72603";
 });


//  Traversing the DOM 
let tval = document.querySelector('ul');
console.log(tval);
tval = document.querySelector('ul li:last-child')
console.log(tval);

// Get Child Nodes 
tval = document.querySelector('ul').childNodes;
console.log(tval);

//Get specific child nodes
console.log(document.querySelector('ul').childNodes[0]);
console.log(document.querySelector('ul').childNodes[1]);

// Get Node Name
console.log(document.querySelector('ul').childNodes[1].nodeName);

//Get Node Type
console.log(document.querySelector('ul').childNodes[0].nodeType);


// Node Type Meaning: 
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

// without text which add for line break 
val = document.querySelector('ul').children;
console.log(val);

// get specific children nodes
console.log(val[0]);
console.log(val[1]);

// we can also access children nodes of children
val = val[0].children;
console.log(val);

// also access attirbute title etc 
console.log(val[0].href);

// We can also access first or last child nodes
val = document.querySelector('ul');

//Give us text because line break
console.log(val.firstChild);
//Skip the line brek get the real first element
console.log(val.firstElementChild);

// last element
console.log(val.lastElementChild);

//last element child children
console.log(val.lastElementChild.children[0].href);

// We can get also paren Element; 
val = document.querySelector("ul li");
console.log(val.parentElement);

//Also access parent of Parent 
console.log(val.parentElement.parentElement);

// also access clss name attribute or etc 
console.log(val.parentElement.parentElement.className);

// we also get sibiling eliment 
val = document.querySelector("ul li:nth-child(3)");
//show text becuase of line space in nextSibling object
console.log(val.nextSibling);

//But we can solve the problem with nextElementSibling object
console.log(val.nextElementSibling);
console.log(val.previousElementSibling);

// we also next next sibling or previous previous sibling
console.log(val.previousElementSibling.previousElementSibling);

// Adding Element to DOm 

// create element with createElement method 

let lItem = document.createElement("li");
console.log(lItem);

//Add class name in the element
lItem.className = "list-group-item";

// add Id int the element 
lItem.id = "new_id";

// add attribute 
lItem.setAttribute("title", "This new item title");
console.log(lItem);

// Append text in element with apeendchild method and createTextNode method
lItem.appendChild(document.createTextNode("R"));

//Append eleemt to existing ol in thml document
document.querySelector('ol').appendChild(lItem);

let newItem = document.createElement("li");
newItem.className = "list-group-item";
newItem.appendChild(document.createTextNode("Ruby"));
document.querySelector('ol').appendChild(newItem);

// Add item in  li or in the html element 
let ancorli  = document.createElement('li');
ancorli.className = "list-group-item";

let ancorItem = document.createElement("a");
ancorItem.appendChild(document.createTextNode("Microsoft"));
ancorItem.href = "http://www.microsoft.com";
ancorli.appendChild(ancorItem);

document.querySelector('ul').appendChild(ancorli);

// Replacing Elements
let hItem = document.createElement("h1");
hItem.classList = "my-3 fs-3 sample-class last-head";
hItem.appendChild(document.createTextNode("New Title"));

let oldHead = document.querySelector(".last-head");

//If we want repelce elements we need to access it's parent element
let parent = document.querySelector(".parent");
console.log(oldHead.parentElement);
parent.replaceChild(hItem, oldHead);

// Remove element 
let listOl  = document.querySelectorAll('ol li');
let listLi = document.querySelectorAll('li');
listOl[0].remove();


// add class
let haead = document.querySelector('.last-head');
haead.classList.add("new-class");
console.log(haead.classList);

// remove class 
haead.classList.remove("new-class");
console.log(haead.classList);

//Check list has this attribute or not
console.log(haead.hasAttribute("title"));

//set attributes
haead.setAttribute("title","This is new Title");
console.log(haead.hasAttribute("title"));

//remveo attributes
haead.removeAttribute("title");
console.log(haead.hasAttribute("title"));