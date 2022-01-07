const buttons = [ 
    {
      "buttonText": {
        "displayText": "🟢 Confirmar Endereço"
        }
      },
    {
      "buttonText": {
        "displayText": "🟡 Alterar"
        }
    }
]
const buttons2 = [ 
    {
      "buttonText": {
        "displayText": "💵 Dinheiro"
        }
      },
    {
      "buttonText": {
        "displayText": "💳 Cartão"
        }
    },
    {
        "buttonText": {
          "displayText": "📱 PIX"
          }
      }
]
const gerenciar_endereco = async (client,numero,cliente,msg)=>{
    
    if(msg.includes('Alterar')){
        await client
        .sendText(numero, 'Ok, informe seu endereço novamente🏠:')
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if(msg.includes('Confirmar Endereço')){
        await client
            .sendText(numero, 'Endereço Confirmado ✅')
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        await client
            .sendButtons(numero, `Selecione a forma de pagamento:`, buttons2, ' ')
            .then(() => {
                cliente.estagioCliente = 'pagamento'
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    }
    else{
            await client
        .sendButtons(numero, `O seu endereço é ${msg}?`, buttons, ' ')
        .then(() => {
            cliente.endereco = msg
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
    }
    
}
module.exports = gerenciar_endereco