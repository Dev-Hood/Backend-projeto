const express = require('express');
const bodyparser = require('body-parser')
const app = express()
app.use(express.json())
routes.use(bodyparser.urlencoded({extended:false}))
routes.use(bodyparser.json())

const requisicao;
app.post('/pedidos',(req,res)=>{
    console.log('Requisição do POST: ',req.body)
    requisicao = req.body
})

requisicao.resumo.forEach(element => {
  
});


const body = document.querySelector(".content")
body.innerHTML+=`
<div class="card">
  <div class="super">
    <p>19:00</p>
    <ol class="itens">
      <li><input type="checkbox" class="check"> Teste</li>
      <li><input type="checkbox" class="check"> Beste</li>
    </ol>
  </div>
  <button class="btn-pronto"><i class="material-icons">check</i></button>
  <div class="inferior">
    <p><b>Endereço:</b> Rua projetada C, 36 asdsds</p>
    <p><b>Pagamento:</b> Dinheiro</p>
    <p><b>Troco:</b> R$20.00</p>
    <p>R$40.00</p>
  </div>
</div>
`