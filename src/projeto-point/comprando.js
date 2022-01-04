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

const gerarResumo = require('./gerar-resumo')

const comprando = async (client,numero,cliente,msg)=>{
    var tamanho =''
    function veriPizza(){
        return new Promise((resolve)=>{
            Object.keys(tabelaDePrecosPizzas).forEach(async (key) => {
                if (msg.includes(key)) {
                    if (msg.includes('Pequena')) {
                        cliente.resumo.push(key + "-Pequena");
                        cliente.total += tabelaDePrecosPizzas[key]["pequena"];
                        tamanho = 'Pequena';
                    }
                    else if (msg.includes('Média')) {
                        cliente.resumo.push(key + "-Média");
                        cliente.total += tabelaDePrecosPizzas[key]["media"];
                        tamanho = 'Média';
                    }
                    else if (msg.includes('Grande')) {
                        cliente.resumo.push(key + "-Grande");
                        cliente.total += tabelaDePrecosPizzas[key]["grande"];
                        tamanho = 'Grande';
                    }
                    if (tamanho != '') {
                        await client
                            .sendText(numero, `OK! Uma pizza *${key} ${tamanho}* foi adicionada ao seu pedido✅`)
                            .catch((erro) => {
                                console.error('Error when sending:erro ao comprar pizza ', erro); //return object error
                            });
                        resolve(true)
                        return;    
                    }
                }
                
            })
            if(tamanho==''){
                Object.keys(tabelaDePrecosBurger).forEach( async (key) => {
                    if(msg.includes(key)){
                        cliente.resumo.push(key)
                        cliente.total+=tabelaDePrecosBurger[key]
                        await client
                            .sendText(numero, 'OK! Um *'+key+'* foi adicionado ao seu pedido✅')
                            .catch((erro) => {
                                console.error('Error when sending: erro ao comprar burger ', erro); //return object error
                            });
                        resolve(true)
                        return;
                    }
                })
            }
        })
    }
   veriPizza()
   .then(()=>{
       resumo()
   })
    .catch((err)=>{
        console.log(err)
    });
    async function resumo(){
         await client
         .sendText(numero, `Aqui está um resumo do seu pedido até agora:\n\n${gerarResumo(cliente.resumo)}\n*Totalizando:* R$${cliente.total}.00`)
         .catch((erro) => {
             console.error('Error when sending:', erro); //return object error
         });
         await client
         .sendButtons(numero, 'Você deseja:', buttons, ' ')
         .then(() =>{
             cliente.estagioCliente = 'continuar-fechar_pedido-remover'
         })
         .catch((erro) => {
             console.error('Error when sending: ', erro); //return object error
         });
     }         
}
module.exports = comprando