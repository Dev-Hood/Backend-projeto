const list = require('./menu')
const inicio = require('./inicio')
const pedido_cardapio_promo = async (client,numero,cliente,msg)=>{
  if(msg.includes('Cardápio')){
    await client
      .sendText(numero, 'Aqui está! 😊')
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    await client
      .sendImage(
        numero,
        __dirname+'/img/cardapio1.jpeg',
        'Cardápio',
        ' '
      )
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
    await client
      .sendImage(
        numero,
        __dirname+'/img/cardapio2.jpeg',
        'Cardápio',
        ' '
      )
      .then(()=>{
        inicio(client,numero,cliente)
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      }); 
  }
  else if(msg.includes('Pedido')){
    await client
      .sendListMenu(numero, '🧾Menu', 'subTitle', 'Escolha a opção referente ao que deseja:', 'Clique aqui', list)
      .then(() => {
        cliente.estagioCliente = 'comprando'
      })
      .catch((erro) => {
        console.error('Error when sending: erro no pedido', erro); //return object error
      });
  }
  
}

module.exports = pedido_cardapio_promo