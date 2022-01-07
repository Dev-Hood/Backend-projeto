const express = require('express');
var path = require("path")
const app = express()
app.use(express.json())

app.get('/pedidos',(req,res)=>{
    console.log('Requisição do GET: ',req)
    res.sendFile(path.normalize('C:/Users/PC/Desktop/botWhatsapp/src/projeto-point/views/index.html'))
})

app.post('/pedidos',(req,res)=>{
    console.log('Requisição do POST: ',req.body)
    res.send(req.body)
})

app.listen(3030);