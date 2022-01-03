const venom = require('venom-bot');
const list = require('./menu')
const inicio = require('./inicio');
const pcp = require('./pedido_cardapio_promo')

var clientes = []


const verificarCliente = (numero)=> {
  let veri = false
  let pos = 0
  clientes.forEach((elemento,indice)=>{
    if(numero == elemento.telefone){
      veri = true
      pos = indice
    }
  })
  return [veri,pos]
}

venom
  .create({
    headless : false,
    session: 'venda', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  }); 

function start(client) {
  client.onMessage( async (message) => {
   var [veri,pos] = verificarCliente(message.from)

    if (message.isGroupMsg === false) {
      if(!veri){
        await client
        .sendText(message.from, '*Olá!*😊\nEu sou a assistente virtual da *Point Lanches*, e vou ajudar você a fazer o seu pedido 🍔🍕')
        .then((result) => {
          clientes.push(
            {
              telefone:message.from,
              estagioCliente:'inicio',
              resumo:'',
              total:0,
              pagamento:'',
              endereco:''
            }
          )
          inicio(client,message.from,clientes[pos])
          console.log(clientes)
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
      }

      else if(clientes[pos].estagioCliente == 'inicio-2'){
        pcp(client,message.from,clientes[pos],message.body)
      }
      /*
       
      */
    }
  });
}

