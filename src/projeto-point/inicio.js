
const buttons = [
    {
      "buttonText": {
        "displayText": "🗒️Ver Cardápio"
        }
      },
    {
      "buttonText": {
        "displayText": "📝Fazer Pedido"
        }
    },
    {
        "buttonText": {
          "displayText": "💰Ver Promoções"
        }
    }
]
const inicio = async (client,numero,cliente)=>{
    await client
    .sendButtons(numero, 'Escolha a opção desejada:', buttons, ' ')
    .then(() => {
        cliente.estagioCliente = 'pedido-cardapio-promo'
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}

module.exports = inicio