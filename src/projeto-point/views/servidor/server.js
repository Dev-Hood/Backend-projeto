const express = require('express');
var path = require("path")
const app = express()
app.use(express.json())
app.use(express.static(path.normalize("C:/Users/HelbertYam/Desktop/projeto-point/Backend-projeto/src/projeto-point/views")))
app.get('/pedidos',(req,res)=>{
    console.log('o caminho é: ',__dirname)
    res.sendFile(path.normalize("C:/Users/HelbertYam/Desktop/projeto-point/Backend-projeto/src/projeto-point/views/index.html"))
})

app.post('/pedidos',(req,res)=>{
    console.log('Requisição do POST: ',req.body)
    cliente = req.body
})



app.listen(3030);