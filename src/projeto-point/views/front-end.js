
axios.get('http://localhost:3030/captpedidos')
    .then(function (response) {
      if(response.data){
        console.log('aqui: ',response.data)
        renderizando(response.data)
      } 
    })
    .catch((erro) => {
        console.error('Erro!!!!!!!!!!: ', erro); //return object error
    });

const renderizando = (clientes)=>{
  var itens = ''
  const body = window.document.querySelector('.content')
  clientes.forEach(element => {
    element.resumo.forEach(element=>{
      itens+=`<li><input type="checkbox" class="check"> ${element}</li>`
    })
    let card = document.createElement('div')
    card.classList.add('card')
    body.appendChild(card)
    card.innerHTML=`
      <div class="super">
        <p>${element.hora}:${element.min}</p>
        <ol class="itens">
          ${itens}
        </ol>
      </div>
      <button class="btn-pronto"><i class="material-icons">check</i></button>
      <div class="inferior">
      <p><b>Número:</b> ${element.telefone}</p>
        <p><b>Endereço:</b> ${element.endereco}</p>
        <p><b>Pagamento:</b> ${element.pagamento}</p>
        <p><b>Troco:</b> R$20.00</p>
        <p>R$${element.total}</p>
      </div>
    `
  });
  
}

setInterval(()=>{
  //window.location.reload()
},15*1000)



