var inputElement = document.querySelector('body input')
var buttonElement = document.querySelector('body button')
var listElement = document.querySelector('body ul')



function findRepos() {
    var userName = inputElement.value
    searchRepo(userName)
    inputElement.value = ''
}

buttonElement.onclick = findRepos


function insertElemets(repos) {

    listElement.innerHTML = ''

    for (repo of repos) {

        var element = document.createElement('li')
        var elementText = document.createTextNode(repo.name)
        element.appendChild(elementText)
        listElement.appendChild(element)
    }
}

function searchRepo(user) {
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            listElement.innerHTML = 'carregando...'
            setTimeout(() => {
                insertElemets(response.data)
            }, 5000);
        })
        .catch(function (error) { console.log(error) })
}

