//Iniciando um módulo 
const moment = require("moment");
const { calculaValor } = require("../lib/funcoesComuns");
var data = moment().format('DD/MM/YYYY, hh:mm')

exports.principal = () => {

//Chamar um arquivo
const {produtosCarrinho} = require('../model/dados')

//Escrever tal coisa
console.log(`------------ Pão de Açucar ------------`)
console.log(`------------ ${data} ------------`)

//Escrever o código 
console.log(`---------- Valor Total: ${calculaValor()} ----------`)


exports.index = () => {
    console.log('---------- HELLo ----------')
} 
}