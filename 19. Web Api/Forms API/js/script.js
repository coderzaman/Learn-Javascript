// What is web API
// Web API extends functionality of Web
// Web One of integral parts is Frontend and another is Backend
// We can expose API Frontend or Backend
// Expose Means: 
// এক্সপোস মানে হচ্ছে কোন ওয়ে রাখা যার মাধ্যমে বাহির থেকে কিছু ফাঙ্কশনালিটি নিয়ে আমাদের ওয়েবসাইটকে আরও সমৃদ্ধ করতে পারি।  বা আমাদের সাইট থেকে ফাঙ্কশনালিটি নিয়ে অন্য ওয়েবসাইট সমৃদ্ব হতে পারে।  লাইক  একটি সকেট থেকে প্লাগের মাধ্যমে করে কিছু নেয়া বা সকেটে অন্য জায়গা থেকে কিছু নিয়ে আশা। 

// আমরা যদি ওয়েব এপিআই একটা পার্ট  হিসেবে ব্রাউজারকে চিন্তা করি, ব্রাউজার এর সাথে ও এরকম বিভিন্ন এপিআই আছে। যেগুলা এক্সপোজ এর মাদ্দমে  ব্রাউজার এর ফাঙ্কশনালিটিকে এক্সটেন্ড করে দেয়।  একইভাবে যদি  সার্ভারের কথা চিন্তা করি সার্ভার এর সাথেও এরকম বিভিন্ন এপিআই  আছে যেগুলা আমরা এক্সপোজ  সার্ভারের ফাঙ্কশনালিটি এক্সটেন্ড করতে পারি। 

// Web Give us Some APIs, Like:
// Forms API
// History API
// Storage API
// Worker API
// Fetch API
// Geolocation API

// Forms Validation API
// checkValidity()	Returns true if an input element contains valid data.
// setCustomValidity()	Sets the validationMessage property of an input element.
// validationMessage	Contains the message a browser will display when the validity is false.

function validateData(){
    let inputField = document.getElementById('input_id');

    // We can Browsers default validation messages
    if(inputField.validity.rangeOverflow){
        inputField.setCustomValidity("rangeOverflow");
    }else if(inputField.validity.rangeUnderflow){
        inputField.setCustomValidity("underflow");
    }

    if(!inputField.checkValidity()){
        console.log(inputField.validationMessage);
        document.getElementById('demo').innerText = inputField.validationMessage;
    }
}