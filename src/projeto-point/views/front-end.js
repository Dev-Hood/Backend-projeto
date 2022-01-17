async function card() {
  var qtdpedidos = 0
  async function renderizando(isReloaded) {
    const response = await fetch('http://localhost:3030/captpedidos')
    const value = await response.json()

    if (value) {
      if (isReloaded) {
        await inserirCard(value, value.length)
      }

      else if (value.length > qtdpedidos) {
        console.log(value);
        var pos = value.length - qtdpedidos
        await inserirCard(value, pos)
      }
      qtdpedidos = value.length
    }
  }

  setInterval(() => renderizando(false), 5 * 1000)

  if (performance.navigation.type == 1) {
    renderizando(true)
  } else {
    console.info("This page is not reloaded");
  }

  async function inserirCard(pedidos, pos) {
    const content = window.document.querySelector('.content')
    for (let i = 0; i < pos; i++) {
      var itens = ''
      pedidos[i].resumo.forEach(item => {
        itens += `<li><input type="checkbox" class="check"> ${item}</li>`
      })
      const card = document.createElement('div')
      card.classList.add('card')
      content.appendChild(card)
      card.innerHTML = `
      <div class="card">
        <div class="super">
          <p>${pedidos[i].hora}:${pedidos[i].min}</p>
          <ol class="itens">
            ${itens}
          </ol>
        </div>
        <div class="inferior">
        <button class="btn-pronto"><i class="material-icons">check</i></button>
        <p><b>Número:</b> ${pedidos[i].telefone}</p>
          <p><b>Endereço:</b> ${pedidos[i].endereco}</p>
          <p><b>Pagamento:</b> ${pedidos[i].pagamento}</p>
          <p><b>Troco:</b> R$20.00</p>
          <p>R$${pedidos[i].total}</p>
        </div>
      </div>
      `
    }
  }
}
async function start() {
  await card()
}
start()




/*
var qtdpedidos = 0
async function renderizando() {
const response = await fetch('http://localhost:3030/captpedidos')
const value = await response.json()
if (value.length > qtdpedidos) {
console.log(value);
qtdpedidos = value.length
await inserirCard(value)
}
}
setInterval(() => renderizando(), 15 * 1000)
if (performance.navigation.type == 1) {
console.info( "This page is reloaded" );
} else {
console.info( "This page is not reloaded");
}

async function inserirCard(pedidos) {
const content = window.document.querySelector('.content')
pedidos.forEach(element => {
var itens = ''
element.resumo.forEach(element => {
  itens += `<li><input type="checkbox" class="check"> ${element}</li>`
})
const card = document.createElement('div')
card.classList.add('card')
content.appendChild(card)
card.innerHTML = `
<div class="card">
  <div class="super">
    <p>${element.hora}:${element.min}</p>
    <ol class="itens">
      ${itens}
    </ol>
  </div>
  <div class="inferior">
  <button class="btn-pronto"><i class="material-icons">check</i></button>
  <p><b>Número:</b> ${element.telefone}</p>
    <p><b>Endereço:</b> ${element.endereco}</p>
    <p><b>Pagamento:</b> ${element.pagamento}</p>
    <p><b>Troco:</b> R$20.00</p>
    <p>R$${element.total}</p>
  </div>
</div>
`
});
}

/*axios.get('http://localhost:3030/captpedidos')
.then(function (response) {
if (response.data) {
  renderizando(response.data)
}
})
.catch((erro) => {
console.error('Erro!!!!!!!!!!: ', erro); //return object error
});


const renderizando = async (pedidos) => {
var itens = ''
const content = window.document.querySelector('.content')
await pedidos.forEach(element => {
element.resumo.forEach(element => {
  itens += `<li><input type="checkbox" class="check"> ${element}</li>`
})
content.innerHTML += `
<div class="card">
  <div class="super">
    <p>${element.hora}:${element.min}</p>
    <ol class="itens">
      ${itens}
    </ol>
  </div>
  <div class="inferior">
  <button class="btn-pronto"><i class="material-icons">check</i></button>
  <p><b>Número:</b> ${element.telefone}</p>
    <p><b>Endereço:</b> ${element.endereco}</p>
    <p><b>Pagamento:</b> ${element.pagamento}</p>
    <p><b>Troco:</b> R$20.00</p>
    <p>R$${element.total}</p>
  </div>
</div>
`
});

}

setInterval(() => {
window.location.reload()
}, 15 * 1000)
*/


