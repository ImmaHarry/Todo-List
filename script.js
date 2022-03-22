//Selectors & Declerations

const todoInput = document.querySelector(".todo-input");
const todoSubmit = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");
const deleteICON = "<i class='fa-solid fa-trash'></i>"
const doneICON = "<i class='fa-solid fa-check'></i>"
const undoneICON = "fa-arrow-rotate-left"


const counterElm = document.querySelector(".counter");
const endMsg = document.querySelector(".endMsg");

const randomMsgs = ["Phew! You have no work remaining!","And this is the end of your todo list.","Hey! No work pending.", "Feels good to have no work, yeah?"]

const username = document.querySelector(".username");
//Functions


function addTodo(event) {
    //Prevents form from submitting
    event.preventDefault();


    const todoCommand = todoInput.value;
    if (todoCommand === "") {
        alert("Empty fields are not allowed! Please enter an item in the list below.")
    }
    else if (todoCommand !== "") {
        //Creating DIV:-
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Create Line Element:-
        const todoItem = document.createElement("li");
        todoItem.textContent = todoCommand;
        todoItem.classList.add("item");
        todoDiv.appendChild(todoItem);
        //Create Buttons:-
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todo-delete");
        deleteButton.innerHTML = deleteICON;
        deleteButton.type = "button";
        todoDiv.appendChild(deleteButton);

        const doneButton = document.createElement("button");
        doneButton.classList.add("todo-done");
        doneButton.type = "button";
        doneButton.innerHTML = doneICON;
        todoDiv.appendChild(doneButton)

        //Appending DIV:
        todoList.appendChild(todoDiv);
        todoInput.value = "";
        counterElm.textContent = `You have created ${document.querySelectorAll(".todo").length} and you have completed ${document.querySelectorAll(".completed").length} tasks. (${document.querySelectorAll(".completed").length}/${document.querySelectorAll(".todo").length})`
    }
    changeText()
}

function completeOrDelete(event) {
    //fa-check, todo-done

    const item = event.target;
    if (item.classList[1] === "fa-trash") {
        item.parentElement.parentElement.remove();
        counterElm.textContent = `You have created ${document.querySelectorAll(".todo").length} and you have completed ${document.querySelectorAll(".completed").length} tasks. (${document.querySelectorAll(".completed").length}/${document.querySelectorAll(".todo").length})`
        
    }
    else if (item.classList[0] === "todo-delete") {
        item.parentElement.remove();
        counterElm.textContent = `You have created ${document.querySelectorAll(".todo").length} and you have completed ${document.querySelectorAll(".completed").length} tasks. (${document.querySelectorAll(".completed").length}/${document.querySelectorAll(".todo").length})`
    }
    else if (item.classList[1] === "fa-check") {
        //item.parentElement.parentElement
        item.parentElement.parentElement.classList.toggle("completed");
        counterElm.textContent = `You have created ${document.querySelectorAll(".todo").length} and you have completed ${document.querySelectorAll(".completed").length} tasks. (${document.querySelectorAll(".completed").length}/${document.querySelectorAll(".todo").length})`
    }

    else if (item.classList[0] === "todo-done") {
        item.parentElement.classList.toggle("completed");
        counterElm.textContent = `You have created ${document.querySelectorAll(".todo").length} and you have completed ${document.querySelectorAll(".completed").length} tasks. (${document.querySelectorAll(".completed").length}/${document.querySelectorAll(".todo").length})`
    }
    changeText()
}

console.log(username.value.length)

function usernameChange() {
    if (username.value.endsWith("'s")) {
        document.title = username.value + " todo list";
    }
    else {
        document.title = username.value + "'s todo list";
        username.value = username.value + "'s";
    }
    username.style.width = username.value.length + "ch";
}


//Event Listeners 
todoSubmit.addEventListener("click", addTodo)
todoList.addEventListener("click", completeOrDelete)
username.addEventListener("change", usernameChange)

