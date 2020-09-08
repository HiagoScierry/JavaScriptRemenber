const users = [
	{
		nome: 'Diego',
		habilidades: ['Javascript', 'ReactJS', 'Redux'],
	},
	{
		nome: 'Gabriel',
		habilidades: ['VueJS', 'Ruby on Rails', 'Elixir'],
	},
]

function skillForUsers(){
    const response = users.map(index => {
        return `O ${index.nome} possui as habilidades: ${index.habilidades.join(' , ')}`
    })
    return response
}


console.log(skillForUsers())