const comprando = require('./comprando')
const precos = require('./precos')
const remover_item = async (client,numero,cliente,msg)=>{
    let msgkey = await msg.slice(0,msg.length-41)
    console.log('msg key é: ',msgkey)
    let ind = cliente.resumo.indexOf(msgkey)
    await cliente.resumo.splice(ind,1)
    console.log('resumo depois de apagar: ',cliente.resumo)
    if(msgkey.includes('Pequena') || msgkey.includes('Grande') || msgkey.includes('Média')){
        let txt = msgkey.split('-')
        let pizza = txt[0]
        console.log(pizza)
        let tamanho = txt[1].toLowerCase()
        console.log(tamanho)
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