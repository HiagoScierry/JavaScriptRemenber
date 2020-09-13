const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

const soma = (...params) => {
    // console.log(params)
    return params.reduce((total, next) => total + next)
}

soma( y)

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9))


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};


const { nome, idade, endereco } = usuario
const { cidade, uf, pais } = endereco

const usuario2 = {
    nome: 'Gabriel',
    idade,
    endereco
}

const usuario3 = {
    nome,
    idade,
    endereco: {
        cidade : 'Lontras',
        uf,
        pais
    }
}

console.log(usuario2)
console.log(usuario3)


