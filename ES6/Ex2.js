const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const ex21 = usuarios.map(index => index.idade)
console.log('exercicio 1 :' , ex21)

const ex22 = usuarios.filter(index => {
    if(index.empresa === 'Rocketseat' && index.idade > 18){
        return index
    }
})
console.log('exercicio 2 :' ,ex22)

const ex23 = usuarios.find(index => {
    if(index.empresa === 'Google'){
        return index
    }
})
console.log('exercicio 3 :' ,ex23)

const ex24 = usuarios.map(index => {
    index.idade = index.idade*2
    return index
}).filter(index => {
    if(index.idade <= 50 ){
        return index
    }
})

console.log('exercicio 4 :' ,ex24)