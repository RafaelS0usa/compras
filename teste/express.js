const express = require('express')

const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('Devolvido pelo express node')
});

//FUNÇÃO DE CALLBACK
app.listen(port, () => {
    console.log('Servidor funcionando ' + port)
});
