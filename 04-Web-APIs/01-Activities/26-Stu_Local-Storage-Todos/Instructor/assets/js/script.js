var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// puts the todos on the page using the data and creating new elements
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // clearing out all the elements inside the todolist
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // process the array todos to create elements
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// set global todos using localStorage, call renderTodos
function init() {
  // TODO: What is the purpose of the following line of code?
  // retrieving the data that is an array
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // checking if i have stored, i want to set todos to the stored value
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // call/executing the renderTodos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // storing JSON that represents an array
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// when a todo is submitted, it reads the data, adds a todo, and calls store and render
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // check to see if data is in the input field
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // add a todo the array todos
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // store the new values into localstorage
  storeTodos();
  // use the new values will be rendered to the page
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// uses event delegation to handle button clicks on the "complete" button
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // checks to see if the event came from a child button
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // store the new array without the extra element
    storeTodos();
    renderTodos();
  }
});

init();
