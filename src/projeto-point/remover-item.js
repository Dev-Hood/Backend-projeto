const comprando = require('./comprando')
const precos = require('./precos')
const 
const remover_item = async (client,numero,cliente,msg)=>{
    await cliente.resumo.splice(cliente.resumo.findIndex(msg))
    if(msg.includes('Pequena') || msg.includes('Grande') || msg.includes('Média')){
        let txt = msg.split('-')
        let pizza = txt[0]
        let tamanho = txt[1].toLowerCase()
        cliente.total-=precos.tabelaDePrecosPizzas[pizza][tamanho]
    }
    else{
        cliente.total-=precos.tabelaDePrecosBurger[msg]
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