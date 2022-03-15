const {produtosCarrinho} = require("../model/dados");

exports.calculaValor=() => {
    var valorTotal = 0
    for(var i = 0; i <produtosCarrinho.length; i++){
  
    console.log('Itens: ', produtosCarrinho[i].nome,' = ', produtosCarrinho[i].Valor)
    
    valorTotal += produtosCarrinho[i].Qtd * produtosCarrinho[i].Valor
  }
 return valorTotal   
}