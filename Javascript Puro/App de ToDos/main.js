var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = ['Fazer café', 'Trabalhar', 'Estudar']

for (todo of todos) {
	renderTodos(todo)
}

function renderTodos(todo) {
    var elementChildList = document.createElement('li')

    var text = document.createTextNode(todo)

    var linkElement = document.createElement('a')

    var linkText = document.createTextNode('Excluir')

    linkElement.setAttribute('href', '#')

    linkElement.appendChild(linkText)

    elementChildList.appendChild(text)
    
    listElement.appendChild(elementChildList)

    listElement.appendChild(linkElement)
}

function addNewItem() {
	var value = inputElement.value
	renderTodos(value)
	inputElement.value = ''
}
