// tipos de dados de referencia
const pessoa = {
  primeiroNome: 'Natanael',
  UltimoNome: 'Santos',
  endereco:{
    rua: 'Parambu',
    num: 510,
    bairro: "jardim guanabara",
    cidade:"Fortaleza",
    Estado: "Ceara"
  },
  idade: 27,
  nomeCompleto: function (){
    return this.primeiroNome + ' ' + this.UltimoNome

}
}

function soma(){

}

pessoa.celular = '85 987977546'

pessoa.enderecoCompleto = function(){
  return `rua : ${this.endereco.rua}, ${this.endereco.num}.`
}

function dadosPessoais(pessoa){
console.log(` \n
nome: ${nomeCompleto()} \n
endereco: ${enderecoCompleto()} \n
telefone: ${pessoa.celular}  `)
  }

  dadosPessoais(pessoa)

  console.log(dadosPessoais)
