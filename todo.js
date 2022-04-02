// JSON.striJSON.stringify() 저장값을 스트링형으러 바꿔줌
// JSON.parse() 저장된 값을 풀어줌
//forEach(element =>{}) 
//Array.filter()

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// console.log(1)

let toDos = [];

function deletToDo(e) {
    const li = e.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));    
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click",deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
}

function hadelToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj)
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",hadelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

// console.log(savedToDos)

if(savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos)
    toDos = parseToDos;
    parseToDos.forEach(element => {
            paintToDo(element);        
    });
}