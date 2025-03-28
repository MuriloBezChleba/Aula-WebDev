/*
console.log('hello world')
console.info('info')
console.warn('PENIS')
console.error('FUDEU')

console.table([
    {id: 1, tarefa: 'estudar JS'},
    {id: 2, tarefa: 'Praticar codigo'},
])

console.group('Grupo de logs')
console.log('Log 1')
console.log('Log 2')
console.groupEnd()

console.time('Timer')
// var a = (1+1+1)*3
console.timeEnd('Timer')

var antigo = 'jeito antigo'
let valorMutavel = 'valor que muda'
const valorImutavel = 'valor que n muda'

console.log(antigo)
console.log(valorMutavel)
console.log(valorImutavel)

valorImutavel = 'eh isso ai'



//tipos de dados primitivos

// let texto = 'texto'
// console.log(typeof texto)
// let numero = 1
// console.log(typeof numero)
// let semValor
// console.log(typeof semValor)
// let nulo = null
// console.log(typeof nulo)
// let uniqueId = Symbol("id")
// console.log(typeof uniqueId)
// let bigNumero = 999999999999999999n
// console.log(typeof bigNumero)

// Tipos de dados complexos

let tarefa = {id: 1, tarefa: "Estudar C" }

let tasks = [
    {id: 1, tarefa: 'estudar JS'},
    {id: 2, tarefa: 'Praticar codigo'},
]

console.log(tasks)
console.log(tasks[0])
console.log(tasks[0]['id'])

let frutas = ['maca','banana','cereja', 22222]
console.log(frutas[2])

let obj = {
    vel:10,
    for:5,
    hp:50
}

console.log(obj.for)

//fazer padroes
let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;

*/

let numero = 'abobora'
console.log(Number(numero))


//lacos

for (let i = 0; i < 10; i++ ){
    console.log('contagem', i)
}

let contadorW =  0
while (contadorW < 5){
    console.log('Contagem', contadorW)
    contadorW++
}

let contadorDW = 5
do {
    console.log(contadorDW)
    contadorDW --
}
while (numero > 0)