
const gerarResumo = require('./gerar-resumo')
const requi = require('../views/servidor/enviar-req-pedido')
const gerenciar_pagamento = async (client,numero,cliente,msg)=>{
    let veri = false
    if(msg.includes('Cartão')){
        cliente.pagamento = 'Cartão'
        await client
        .sendText(numero, 'Ok, Pagamento com Cartão✅')
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        veri = true    
    }
    else if(msg.includes('PIX')){
        await client
            .sendText(numero, 'Ok, Pagamento com PIX ✅\n\n*Chave CPF:* 1111-1111-11')
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        cliente.pagamento = 'PIX'
        veri = true
    }
    else if(msg.includes('Dinheiro') || !isNaN(msg) ){
        if(msg.includes('Dinheiro')){
            await client
            .sendText(numero, 'Ok, Pagamento com Dinheiro ✅\n ')
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
            cliente.pagamento = 'Dinheiro'
            await client
            .sendText(numero, 'Digite para qual valor você deseja troco:\n\n *OBS:* Caso não deseje troco digite 0')
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        }
        else{
            cliente["troco"] = msg
            veri = true
        }
        
    }
    if(veri){
        await resumoFinal(client,numero,cliente)
        var data = new Date();
        var hora = data.getHours();       
        var min  = data.getMinutes();
        cliente["hora"] = hora
        cliente["min"] = min
        requi(cliente)
    }
}

async function resumoFinal(client,numero,cliente){
    await client
        .sendText(numero, `😊 Prontinho! O seu pedido foi finalizado, aqui está um resumo:\n
${await gerarResumo(cliente.resumo)}
*➡️ Totalizando:* R$${cliente.total}.00
*➡️ Endereço:* ${cliente.endereco}
*➡️ Forma de Pagamento:* ${cliente.pagamento}
Agora é só aguardar, seu pedido em breve será entregue   🛵💨 
        `)
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        await client
        .sendText(numero, 'Agradecemos pela sua preferência, volte sempre! 🤗')
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}
module.exports = gerenciar_pagamento