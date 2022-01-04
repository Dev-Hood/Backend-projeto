const comprando = require('./comprando')

const continuar_fechar_revover = async (client,numero,cliente,msg)=>{
    if(msg.includes('Continuar Comprando')){
        comprando(client,numero,cliente,msg)
    }
    else if(msg.includes('Fechar Pedido')){
      
    }
    else if(msg.includes('Remover Algo')){
    }
    
  }
  
  module.exports = continuar_fechar_revover