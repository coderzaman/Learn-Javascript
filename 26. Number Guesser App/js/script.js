class UI {
    static ShowMessage(message, className) {
        showMessage.innerHTML = `
        <div class="col-12 py-3 showOuput shadow ${className}">
                    <h4 class="fs-1 fw-bold text-center">${message}</h4>
                    <p class="fs-3 text-center m-0 text-info" id="message"></p>
        </div>
        `
    }

    static showRequired() {

        requiredField.style.display = "block";
        userInputField.style.border = "1px solid red";

        setTimeout(function () {
            requiredField.style.display = "none";
            userInputField.style.border = "1px solid #dee2e6";
        }, 2000)
    }
}


// Get Btn and Field 
const userInputField = document.querySelector('#user-input');
const playBtn = document.querySelector('#play-btn');
const restartBtn = document.querySelector('#restart-btn');
const showMessage = document.querySelector('#show-message');
const countTime = document.querySelector('#count-time');


// Event Listner
playBtn.addEventListener('click', play);
restartBtn.addEventListener('click', restart);
let randomNumber = Math.floor(Math.random() * 10 + 1);

// Declare var
let userInput;
let x = 3;


//Function
function play() {
    userInput = userInputField.value;
    if (userInput == '') {
        UI.showRequired();
    } else {
        x--;
        console.log("Random Number:", randomNumber);
        if (userInput == randomNumber) {
            userInputField.value = '';
            playBtn.disabled = true;
            restartBtn.disabled = false;
            UI.ShowMessage("You Win!", 'valid');
            message.textContent = "";
        } else if (x == 0) {
            userInputField.value = '';
            playBtn.disabled = true;
            restartBtn.disabled = false;
            UI.ShowMessage("You lose!", 'notValid');
            const message = document.querySelector('#message');
            message.textContent = "";
           
        } else if (userInput < randomNumber) {
            UI.ShowMessage(`You Have <span id="count-time" class="text-danger">${x}</span> Chance Left`, "normal");
            const message = document.querySelector('#message');
            message.textContent = "Correct answer is greater!";
        } else if (userInput > randomNumber) {
            UI.ShowMessage(`You Have <span id="count-time" class="text-danger">${x}</span> Chance Left`, "normal");
            const message = document.querySelector('#message');
            message.textContent = "Correct answer is smaller!";
        }
    }
}

function restart() {
    showMessage.innerHTML = "";
    playBtn.disabled = false;
    restartBtn.disabled = true;
    randomNumber = Math.floor(Math.random() * 10 + 1);
    userInputField.value = '';
    x = 3;

}