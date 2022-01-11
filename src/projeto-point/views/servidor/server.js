const express = require('express');
var path = require("path")
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,"..\\")))
const pedidos = []
app.get('/pedidos',(req,res)=>{
    res.sendFile(path.join(__dirname,'..\\index.html'))
})
app.get('/captpedidos',(req,res)=>{
    if(pedidos.length>=1){
        res.send(pedidos)
    }
    else{
        res.send(false)
    }
})

app.post('/savepedido',(req,res)=>{
    pedidos.push(req.body)
    res.send(req.body)
})

app.listen(3030);