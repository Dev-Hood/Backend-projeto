const venom = require('venom-bot');
const inicio = require('./inicio');
const pcp = require('./pedido_cardapio_promo')
const comprando = require('./comprando')
const sabores = require('./2sabores')
const remover_item = require('./remover-item')
const continuar_fechar_pedido_remover = require('./continuar-fechar_pedido-remover')
const gerenciar_endereco = require('./gerenciar-endereco')
const gerenciar_pagamento = require('./gerenciar-pagamento')
var clientes = []

venom
  .create({
    headless: false,
    session: 'venda', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    var cliente = await clientes.find((user) => user.telefone == message.from);
    if (message.isGroupMsg === false && message.from == '553899909503@c.us') {
      if (cliente == undefined) {
        await client
          .sendText(message.from, '*Olá!*😊\nEu sou a assistente virtual da *Point Lanches*, e vou ajudar você a fazer o seu pedido 🍔🍕')
          .then(async () => {
            clientes.push(
              {
                telefone: message.from,
                estagioCliente: 'inicio',
                resumo: [],
                total: 0,
                pagamento: '',
                endereco: '',
                troco: '0',
              }
            )
            await inicio(client, message.from, clientes[clientes.length - 1])
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
          await client
          .sendText(message.from, 'Caso haja algum erro ao realizar o seu pedido, basta enviar *#* retornarei ao início😊')
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log(clientes)
      }
      else if (message.body == '#') {
        cliente.estagioCliente =  'inicio'
        await client
          .sendText(message.from, 'Ok, retornando ao início...')
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
      else if (cliente.estagioCliente == 'pedido-cardapio-promo') {
        await pcp(client, message.from, cliente, message.body)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == 'comprando') {
        comprando.comprando_itens(client, message.from, cliente, message.body)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == '1sabor') {
        sabores(client, message.from, cliente, message.body,2)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == '2sabor') {
        sabores(client, message.from, cliente, message.body,false)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == 'continuar-fechar_pedido-remover') {
        await continuar_fechar_pedido_remover(client, message.from, cliente, message.body)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == 'remover-item') {
        await remover_item(client, message.from, cliente, message.body)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == 'endereço') {
        await gerenciar_endereco(client, message.from, cliente, message.body)
        console.log(clientes)
      }
      else if (cliente.estagioCliente == 'pagamento') {
        await gerenciar_pagamento(client, message.from, cliente, message.body)
        console.log(clientes)
      }
      /*
       
      */
    }
  });
}

