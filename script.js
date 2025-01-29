// ==== Todo CRUD Management ====
let todos = []

// DOM Elements
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo')
const todoList = document.querySelector('#todo-list')

// Function to render todos
function renderTodos() {
  todoList.innerHTML = ''
  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <span>${todo}</span>
      <button class="edit" onclick="editTodo(${index})">Edit</button>
      <button class="delete" onclick="deleteTodo(${index})">Delete</button>
    `
    todoList.appendChild(li)
  })
}

// Function to add todo 
function addTodo(event) {
  event.preventDefault()
  const todo = todoInput.value
  if (todo) {
    todos.push(todo)
    renderTodos()
    todoInput.value = ''
  }
}

// Function to edit todo   
function editTodo(index) {
  const updatedTodo = prompt('Edit your Todo', todos[index])
  if (updatedTodo !== null) {
    todos[index] = updatedTodo.trim()
    renderTodos()
  }
}

// Function to delete todo    
function deleteTodo(index) {
  if (confirm('Are you sure you want to delete this todo?')) {
    todos.splice(index, 1)
    renderTodos()
  }
}   

// Event Listeners
todoForm.addEventListener('submit', addTodo)

renderTodos()