// document is an alias for my html document which is main_work.html
const inputField = document.querySelector(".form_input");
// console.log(inputField);
const addBtn = document.querySelector(".add_btn");
// console.log(addBtn);
const toDoContainer = document.querySelector(".to-do-container");
// console.log(toDoContainer);
const addTodoForm = document.querySelector(".form");
const saveEdit = document.querySelector(".save_edit_btn");

// HANDLE TODO FORM SUBMISSION
function addTodoHandler(event) {
    event.preventDefault();
    const todo = inputField.value;
    showTodo(todo);
    inputField.value = "";
}

// SHOW TODO FUNCTION
function showTodo(todo) {
    // create li element
    const listItem = document.createElement("li");
    // add classList style
    listItem.classList.add(".todo_section_todoitem");
    // create a todo content
    let todoContent = `
   <div>
     <input type="checkbox" class="to-do_section_checkbox"> 
     <span class="todo_text">${todo}</span>

     <div class="todo_action_wrapper">
     <button class="todo_actions edit_btn" id="edit_btn">Edit</button>
       <button class="todo_actions delete_btn" id="delete_btn">Delete</button>
     </div>
   </div>
 `;
    //make the content of the li element/list item to be the todocontent. Inserting the todo content in the li element
    listItem.innerHTML = todoContent;

    // show the todoitem at the top of the todo container
    toDoContainer.prepend(listItem);
}

//EDIT TODO FUNCTION
let todoBeingEdited;

function editTodo(e) {
    todoBeingEdited = e.target.parentElement.previousElementSibling
    console.log(todoBeingEdited);
    inputField.value = todoBeingEdited.textContent;
    saveEdit.classList.remove("hidden");
}

function saveEditing(e) {
    e.preventDefault()
    console.log(todoBeingEdited)
    console.log(inputField.value)
    todoBeingEdited.textContent = inputField.value;
}

function deleteTodo(e) {
    e.target.remove()
}

// ADD EVENT LISTENER
// 1.element that the event is happening to: addTodoform
// 2.call addEventListener method. Expects two args:
// a. event you're listening for:submit
// b. function that will control what happens if the event happens. A function that tells JS to do something if the event happens
addTodoForm.addEventListener("click", function (e) {
    if (e.target && e.target.id === "add_todo_btn") {
        addTodoHandler(e);
    }
    if (e.target && e.target.id === "save_edit_btn") {
        console.log("herreeee")
        saveEditing(e);
    }
});

// PROPAGATION
toDoContainer.addEventListener("click", function (event) {
    if (event.target && event.target.id === "edit_btn") {
        console.log("I am propagating");
        editTodo(event);
    }
    if (event.target && event.target.id === "delete_btn") {
        console.log("I am a delete propagator");
        deleteTodo(event)
    }
});