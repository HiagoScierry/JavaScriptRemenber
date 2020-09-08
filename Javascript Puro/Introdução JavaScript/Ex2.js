function interval(a, b) {
    let par = []
    for (let i = a; i <= b; i++) {
        if(i % 2 === 0){
            par.push(i)
        }
    }
    console.log(par)
}

interval(0, 20)