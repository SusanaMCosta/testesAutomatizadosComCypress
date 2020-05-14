it('nada agora', function () {})

// function soma(a, b){
//     return a + b
// }

// const soma = function (a, b){
//     return a + b
// }

// const soma = (a, b) => {
//     return a + b
// }

//git config --global user.email "you@example.com"
//git config --global user.name "Your Name"

//const soma = (a) => a + a

//testando um comentário

const soma = (a, b) => a + b

console.log(soma(1, 4))

it('a function test...', function() {
    console.log('Function', this)
})

it('an arrow test...', () => {
    console.log('Arrow', this)
})