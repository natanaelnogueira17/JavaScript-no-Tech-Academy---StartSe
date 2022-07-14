const listaTarefas = document.querySelector('#listaTarefas')
const caixatexto = document.querySelector('#caixaTexto')
const botaoAdicionar = document.querySelector('#botaoAdicionar')

botaoAdicionar.addEventListener('click', function(){
  const textoDaTarefa = caixaTexto.Value
  caixaTexto.value = ''
  listaTarefas.appendChild(adicionaTarefa(textoDaTarefa))
  caixatexto.focus()

})

function adicionartarefa(textoDaTarefa){
  const elementLI = document.createElement('li')
  const elementSPAN = docuemt.createElement('span')

  elementoSPAN.setAttribute('id','tarefa')
  elementoSPAN.textContent = textoDaTarefa

  elementoLI.appendChild(elementoSPAN)
  elementoLI.appendChild(adicionarBotaoRemover())

  console.log(elementoLI)
  return elementoLI
}

function adicionaBotaoRemover(){
  const botaoRemover = document.createElement('button')
  botaoRemover.textContent = 'x'
  botaoRemover.className = 'remover'

  botaoRemover.addEventListener('click', function(){
    listaTarefas.removeChild(this.parentNode)
  })
    return botaoRemover
}


