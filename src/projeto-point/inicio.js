
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
    .then((result) => {
        cliente.estagioCliente = 'inicio-2'
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}

module.exports = inicio