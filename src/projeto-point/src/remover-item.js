const comprando = require('./comprando')
const precos = require('./precos')
const remover_item = async (client,numero,cliente,msg)=>{
    let msgkey = await msg.slice(1,msg.length-41)
    let ind = cliente.resumo.indexOf(msgkey)
    await cliente.resumo.splice(ind,1)
    if(msgkey.includes('Com Borda')) msgkey = await msgkey.slice(0,msgkey.length-10)
    if(msgkey.includes('Pequena') || msgkey.includes('Grande') || msgkey.includes('Média')){
        let txt = msgkey.split('-')
        let pizza = txt[0]
        let tamanho = txt[1].toLowerCase()
        if(tamanho=='média') tamanho='media'
        cliente.total-=precos.tabelaDePrecosPizzas[pizza][tamanho]
    }
    else{
        cliente.total-=precos.tabelaDePrecosBurger[msgkey]
    }
    await client
        .sendText(numero, 'Item Removido✅')
        .then(()=>{
            comprando.resumo(client,numero,cliente)
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });   
}
module.exports = remover_item