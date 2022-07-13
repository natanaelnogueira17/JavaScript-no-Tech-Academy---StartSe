//OPERADORES ARITMÉTRICOS

// (+)
let a = 9
let b = 9
let soma = a + b
console.log(soma) //  15


// CONCATENAR 
let nome1 = "josue "
let nome2 = "carlos "
 let concatenacao = nome1 + nome2
 console.log(concatenacao) // Josue Carlos

 //  (-) SUBTRACAO 

//let a = 6
//let b = 9
let diferenca = a - b
console.log(diferenca)  // -3


// * MULTIPLICACAO 
//let a = 6
//let b = 9
let mult = a * b
console.log(mult) //54

//   (/)  DIVISAO
//let a = 6
//let b = 9
let DIVISAO = a / b
console.log(DIVISAO) //0.66666666


// % RESTO DA DIVISAO 

//   (/)  DIVISAO
//let a = 6
//let b = 9
let RESTO = a % b
console.log(RESTO) //6


// ATRIBUICAO
//  =
let cor = 'amarelo'  // atribuindo valor a variavel cor 
console.log(cor)  // amarelo

// *=
let num = 3
//num *=2  mesma coisa de abaixo 
num = num * 2

console.log(num) // 6
// console.log(num**=2)

// OPERADORES RELACIONAIS 

// OU

let x = 10
let y = 20

console.log(x<101) // true
console.log(x<= y) // true

//   == IGUALDADE, MAS NAO CONSIDERA O TIPO 

let nota1 = 10
let nota2 = '8'
console.log(nota1 == nota2) // false



// OPERADOR DE NEGACAO 

// NOT - (!)

let conectado = true
console.log(!conectado) // false
console.log(conectado) // true 


// DESIGUALDADE  !=, !== 

// == IGUALDADE  => NAO CONSIDERA O TIPO DA VARIAVEL 

// === IGUALDADE ESTRITA - EXATAMENTE IGUAL 


let not1 = 5
let not2 = '5'

console.log(not1 != not2)//false  esse sinal de igual nao considera tipo por isso é verd, mas como assumiu sinal de (!) ficará false
console.log(!(not1 == not2)) // a mesma coisa do de cima 

console.log(not1 !== not2) // aqui ele ja vai considerar o tipo por isso vai retornar true, pois logo recebe sinal de 
console.log(!(not1 === not2))


//OPERADORES LOGICOS BINARIOS 


let a1 = 5
let b1 = 5
let c = 7
let d = 9
//operadores usados  < => menor, > => maior, && => e , || => or, ou

// OPERADOR INCREMENTAL   ++
 // a++ =  a +1// 