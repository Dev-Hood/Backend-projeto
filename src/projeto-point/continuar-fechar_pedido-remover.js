
const pedido_cardapio_promo = require('./pedido_cardapio_promo')
const gerarResumo = require('./gerar-resumo')


const continuar_fechar_revover = async (client,numero,cliente,msg)=>{
    const list = await criar_selecao_remover(cliente)
    if(msg.includes('Continuar Comprando')){
       await pedido_cardapio_promo(client,numero,cliente,msg)
    }
    else if(msg.includes('Fechar Pedido')){
        await client
        .sendText(numero, 'Ok! pedido fechado😊')
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
        await client
        .sendText(numero, `Por favor, digite seu endereço🏠:\n Exemplo: Rua Américo Martins, 36`)
        .then(()=>{
            cliente.estagioCliente = 'endereço'
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else if(msg.includes('Remover Algo')){
        await client
            .sendListMenu(numero, '🗑️Remover item', 'subTitle', 'Escolha o item que você deseja remover do pedido:', 'Clique aqui', list)
            .then(() => {
                cliente.estagioCliente = 'remover-item'
            })
            .catch((erro) => {
                console.error('Error when sending: erro no pedido', erro); //return object error
            });
    }
    
}

async function criar_selecao_remover(resumo){
    let list = [{
        title:'Remover item',
        rows:[]
    }]
    let lista = await gerarResumo(resumo).split('\n')
    lista = lista.split('\n')
    lista.pop()
    lista = lista.map(function(nome) {
        return nome.substring(6,nome.length-2)
    });
    for (var nomes in lista){
        list[0].rows.push({
            title:nomes,
            description:'--------------------'
        })
    }
    return list
}
  
module.exports = continuar_fechar_revover