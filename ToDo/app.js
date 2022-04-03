//.push() 배열에 값추가
//propmt() user에게 질문할수있음
//isNaN nan인지 아닌지 판별
//console.dir(document) document object보여줌
//contains() 특정문자가 있는지 확인 반환값boolean
//.remove() 특정선택자를 가진 요소를 제거
//.add() remove 반대
//.toggle() 조건문+add,remove
//localStorage .removeItem .getItem .setItem

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginBtnClick(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintingGreetings(username);
}

function paintingGreetings(username) {
    greeting.innerText = `Hello ${username} keep going`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem("username");


if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginBtnClick)
} else {
    paintingGreetings(savedUsername);
}