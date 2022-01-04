const venom = require('venom-bot');
const list = require('./menu')
const inicio = require('./inicio');
const pcp = require('./pedido_cardapio_promo')
const comprando = require('./comprando')

var clientes = []

venom
  .create({
    headless : true,
    session: 'venda', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  }); 

function start(client) {
  client.onMessage( async (message) => {
    var cliente = await clientes.find((user) => user.telefone == message.from);
    console.log('verificação: '+cliente)
    if (message.isGroupMsg === false) {
      if(cliente == undefined){
        await client
        .sendText(message.from, '*Olá!*😊\nEu sou a assistente virtual da *Point Lanches*, e vou ajudar você a fazer o seu pedido 🍔🍕')
        .then(async() => {
          clientes.push(
            {
              telefone:message.from,
              estagioCliente:'inicio',
              resumo:[],
              total:0,
              pagamento:'',
              endereco:''
            }
          )
          await inicio(client,message.from,clientes[clientes.length-1])
          
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        console.log(clientes)
      }
      else if(cliente.estagioCliente == 'pedido-cardapio-promo'){
        await pcp(client,message.from,cliente,message.body)
        console.log(clientes)

      }
      else if(cliente.estagioCliente == 'comprando'){
        console.log(clientes)
        comprando(client,message.from,cliente,message.body)
      }
      /*
       
      */
    }
  });
}

