// escopo de  variaveis e constantes

let x = 10  // variavel global 
console.log(x)

function soma(a,b){
  console.log(x)
  let z = a + b  // variavel local => so funciona dentro da funcao
  return z
  console.log(x) // nao consegue chegar aqui devido ao return.

}
let a = 50
console.log(a)

//console.log(z)
console.log(soma(4,23)) // aqui ele loga o console.log(x) dentro da funcao e o reultado da funcao 


//////////////////////////////////////////////////////////////////////////////

function calculaMilha(){
  let km = document.querySelector('#valorKM').value 
  document.querySelector('#resultado').textContent = km * 1.609
}