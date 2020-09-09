var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('listTodos')) || []

function renderTodos() {
    listElement.innerHTML = ''

    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')
        var pos = todos.indexOf(todo)
        var linkText = document.createTextNode('Excluir')
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addNewItem() {
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
}

buttonElement.onclick = addNewItem


function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos))
}