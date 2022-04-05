
const { principal } = require ('../Carrinhosdecompras/src/index')
const express = require('express')
const path = require ('path')
const app = express();
const port = 3000;

principal()

app.get('/', express.static(path.join(__dirname, 'public/')))

app.get('/', function(req, res){
    res.send('Devolvido pelo express node')
});

//FUNÇÃO DE CALLBACK
app.listen(port, () => {
    console.log('Servidor funcionando ' + port)
});