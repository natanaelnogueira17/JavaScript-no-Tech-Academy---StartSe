//alert("ola, Seja bem vindo")
 // document.write("Essa é nossas primeira aula de JS")
  document.querySelector('').textContent = '' //seleciona e modifica um conteudo de texto
  document.querySelector('').textContent = ' '//seleciona e modifica um conteudo de texto
  const nome = prompt("qual o seu nome?")
 //alert(`Que bom ter você aqui ${nome}! \n Vamos comecar?`)


 /*function bemVindo(){
  	const nome = document.querySelector('#novoUsuario').value;
    alert(`Olá ${nome}! Seja bem vindo`)
    document.getElementById('formularioLogin').style.display = 'none'
    
    
 }*/

function mudarCorFundo(){
  const menu = document.querySelector('#coresFundo')
  const cor = menu.options[menu.selectedIndex].value
  document.body.style.background=cor
  
}

 