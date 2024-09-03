let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(){
    this.innerText = "Clcik Again";
    btn3.addEventListener("click", function(){
        this.innerText = "Thank you";
        btn3.addEventListener("click", function(){
            this.innerText = "Bye Bye!";
            btn3.addEventListener("click", function(){
                this.style.display = "none";
            })
        })
    })    
})


btn3.addEventListener("mouseover", function(){
    this.style.backgroundColor ="red";
});
btn3.addEventListener("mouseout", function(){
    this.style.backgroundColor ="orange";
});

document.getElementById("btn4").addEventListener("click", message);

function message(e){
    let val = e.target;

    //Milisecond after reloading page
    console.log(e.timeStamp);

    //Event type
    console.log(e.type);

    //clinetY() function repereset click distance pixel at y-axis of page
    console.log(e.clientY);

    //clinetX() function repereset click distance pixel at x-axis of page
    console.log(e.clientX);

    //offsetY() function repereset click distance pixel at y-axis of element
    console.log(e.offsetY);

    //offsetX() function repereset click distance pixel at x-axis of element
    console.log(e.offsetX);

    // Note: We can doint it container or any element or we also we any event listner
}

// chage backgroundColor with use offsetY or offsetX value

// document.querySelector(".container").addEventListener("click", changeBackWithClick);

// function changeBackWithClick(e){
//     let val = e.target;
//     val.style.backgroundColor = `#${e.offsetX}`
// }

// document.querySelector(".container").addEventListener("mouseover", changeBackWithHover);

// function changeBackWithHover(e){
//     let val = e.target;
//     val.style.backgroundColor = `#${e.offsetX}`
   
// }

// document.querySelector(".container").addEventListener("mousemove", changeBackWithMove);

// function changeBackWithMove(e){
//     let val = e.target;
//     val.style.backgroundColor = `#${e.offsetX}`
   
// }


document.getElementById("fname").addEventListener("focus", styleFocused);
document.getElementById("email").addEventListener("focus", styleFocused);
document.getElementById("password").addEventListener("focus", styleFocused);
document.getElementById("repassword").addEventListener("focus", styleFocused);

function styleFocused(e){
    this.style.border ="3px solid green";
}




document.getElementById("password").addEventListener("keyup", collectPasswords);
let usPass ="";
function collectPasswords(e){
    usPass = this.value;
    console.log(this.value);
}

document.getElementById("repassword").addEventListener("keyup", collectRePasswords);
let reUsPass ="";
function collectRePasswords(e){
    reUsPass = this.value;
    chekPassRealtime(reUsPass);
}

let checkpass = document.getElementById("chekpass");


function chekPassRealtime(pass){
    if(pass != usPass){
        document.getElementById("repassword").style.backgroundColor = "red";
        checkpass.classList = "fst-italic";
        checkpass.style.color = "red";
        checkpass.style.display = "inline-block";
        checkpass.innerText="Password Not Match"
        
    }else{
        document.getElementById("repassword").style.backgroundColor = "white";
        checkpass.innerText="";
    }
}


document.getElementById("fname").addEventListener("focusout", styleFocusedOut);
document.getElementById("email").addEventListener("focusout", styleFocusedOut);
document.getElementById("password").addEventListener("focusout", styleFocusedOut);
document.getElementById("repassword").addEventListener("focusout", styleFocusedOut);
function styleFocusedOut(e){
    this.style.border ="1px solid lightgray";
    this.style.background = "white";
}