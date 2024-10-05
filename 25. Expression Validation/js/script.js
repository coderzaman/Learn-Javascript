class UI {
    static ShowMessage(message, className) {
        showMessage.innerHTML = `
            <div class="col-12 py-3 showOuput shadow ${className}">
                <h4 class="fs-1 fw-bold text-center text-white">${message}</h4>
        </div>`
    }

    static showRequired(){
        showMessage.innerHTML ='';
        requiredField.style.display = "block";
        userInputField.style.border = "1px solid red";

        setTimeout(function() {
            requiredField.style.display = "none";
            userInputField.style.border = "1px solid #dee2e6";
        },2000)
    }
}


// Get Btn and Field 
const userOptionField = document.querySelector('#sel-option');
const userInputField = document.querySelector('#user-input');
const validateBtn = document.querySelector('#check-btn');
const showMessage = document.querySelector('#show-message');
const requiredField = document.querySelector('#requiredField');

// RegEx 
const phoneNumberRegEx = /^(\+)?(88)?01[0-9]{9}$/;
const emailRegEx = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
const postalCodeRegEx = /^[0-9]{4}$/;
const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[^\s]{6,}$/;
const userNameRegEx = /^[a-zA-Z][a-zA-Z0-9._]{2,29}$/;
const nameRegEx = /^[A-Z][a-zA-Z]+([ '-][A-Z][a-zA-Z]+)*$/;

// Event Listner
validateBtn.addEventListener('click', checkValidation);


//Function
function checkValidation() {
    let userOption = userOptionField.value;
    let userInput = userInputField.value;

    if (userInput == '') {
        UI.showRequired();
    } else {

        if (userOption == "email" && emailRegEx.test(userInput)) {
            UI.ShowMessage("Valid", 'valid');
        } else if (userOption == "password" && passwordRegEx.test(userInput)) {
            UI.ShowMessage("Valid", 'valid');
        } else if (userOption == "phoneNumber" && phoneNumberRegEx.test(userInput)) {
            UI.ShowMessage("Valid", 'valid');
        } else if (userOption == "postalCode" && postalCodeRegEx.test(userInput)) {
            UI.ShowMessage("Valid", 'valid');
        } else if (userOption == "name" && nameRegEx.test(userInput)) {
            UI.ShowMessage("Valid", 'valid');
        } else if (userOption == "userName" && userNameRegEx.test(userInput)) {
            UI.ShowMessage("Valid", 'valid');
        }
        else {
            UI.ShowMessage("Not Valid", 'notValid')
        }
    }
}

