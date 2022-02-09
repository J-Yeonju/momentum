const logginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    console.log("hello", logginInput.value);
}


loginButton.addEventListener("click", onLoginBtnClick)
