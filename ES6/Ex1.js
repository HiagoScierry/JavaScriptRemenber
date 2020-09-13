class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    isAdmin() {
        return this.admin === true
    }

}

class admin extends user {
    admin = true
}


const User1 = new user('email@teste.com', 'senha123')
const Adm1 = new admin('email@teste.com', 'senha123')

console.log(User1)
console.log(Adm1)