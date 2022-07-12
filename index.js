//alert('Ola! seja bem vindo!')
document.write('Essa a minha primeira aula no JS  ! Muito fera !')

document.querySelector('#t1').textContent = ' Java Script - introdução'
document.querySelector('#t2').textContent = 'java Script - é um excelente linguagem de programação fullstack'
//const nome = prompt( 'whats your name?')

//alert(`Welcome, ${nome} this world is bad, but God is good!`)

function bemVindo(){
  const nome = document.querySelector('#nomeUsuario').value
  alert(`Olá ${nome} ! Seja Bem Vindo`)
  document.getElementById('formularioLogin').style.display = 'none'

}