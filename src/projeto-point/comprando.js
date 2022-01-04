const tabelaDePrecosPizzas = {
    "Calamussa":{
        "pequena":19,
        "media":25,
        "grande":31
    },
    "Mista":{
        "pequena":19,
        "media":25,
        "grande":31
    },
    "Frango":{
        "pequena":19,
        "media":25,
        "grande":31
    },
    "Portuguesa":{
        "pequena":19,
        "media":25,
        "grande":31
    },
    "A Moda":{
        "pequena":19,
        "media":25,
        "grande":31
    },
    "Point":{
        "pequena":22,
        "media":28,
        "grande":36
    },
    "Alho":{
        "pequena":22,
        "media":28,
        "grande":36
    },
    "4 Queijos":{
        "pequena":22,
        "media":28,
        "grande":36
    },
    "Master Point":{
        "grande":50
    },
    "Banana com Chocolate":{
        "pequena":16,
        "media":20,
        "grande":25
    },
    "Banana com Canela":{
        "pequena":16,
        "media":20,
        "grande":25
    },
}
const tabelaDePrecosBurger = {
    "X-Burguer":6,
    "X-Salada":8,
    "X-Bacon":10,
    "X-Tudo":12,
    "X-Mamute":15,
    "X-Point":18,
    "X-Triplo":22,

}
const buttons = [ 
    {
      "buttonText": {
        "displayText": "🛒Continuar Comprando"
        }
      },
    {
      "buttonText": {
        "displayText": "🔐Fechar Pedido"
        }
    },
    {
        "buttonText": {
          "displayText": "🗑️Remover Algo"
        }
    }
]

function gerarResumo(resumo){
    let todoResumo=''
    const countMap = {};
  
    for (const element of resumo) {
      if (!countMap[element]) {
        // Se ainda não existir elemento, definimos como um, já que
        // estamos na primeira ocorrência.
        countMap[element] = 1;
      } else {
        // Caso contrário, incrementamos um no número atual.
        countMap[element] += 1;
      }
    }
    Object.keys(countMap).forEach((key) => {
        todoResumo+=`*${countMap[key]}x - ${key}* \n`
    });
    
    return todoResumo;
}


const comprando = async (client,numero,cliente,msg)=>{
    var tamanho =''
    Object.keys(tabelaDePrecosPizzas).forEach( async (key) => {
        if(msg.includes(key)){
            if(msg.includes('Pequena')){
                cliente.resumo.push(key+"-Pequena")
                cliente.total+=tabelaDePrecosPizzas[key]["pequena"]
                tamanho = 'Pequena'
            }
            else if(msg.includes('Media')){
                cliente.resumo.push(key+"-Média")
                cliente.total+=tabelaDePrecosPizzas[key]["media"]
                tamanho = 'Média'
            }
            else if(msg.includes('Grande')){
                cliente.resumo.push(key+"-Grande")
                cliente.total+=tabelaDePrecosPizzas[key]["grande"]
                tamanho = 'Grande'
            }
            if(tamanho!=''){
                await client
                    .sendText(numero, `OK! Uma pizza *${key} ${tamanho}* foi adicionada ao seu pedido✅`)
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
                    break;
            }
        }
    })
    Object.keys(tabelaDePrecosBurger).forEach( async (key) => {
        if(msg.includes(key)){
            cliente.resumo.push(key)
            cliente.total+=tabelaDePrecosBurger[key]
            await client
                .sendText(numero, 'OK! Um *'+key+'* foi adicionado ao seu pedido✅')
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            break;
        }
        
    },async ()=>{
        await client
            .sendText(numero, `Aqui está um resumo do seu pedido até agora:\n\n ${gerarResumo(cliente.resumo)}\n*Totalizando:* R$${cliente.total}.00`)
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        await client
            .sendButtons(numero, 'Você deseja:', buttons, ' ')
            .then(() => {
                cliente.estagioCliente = 'veri-continuar-comprando'
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    });

}

module.exports = comprando