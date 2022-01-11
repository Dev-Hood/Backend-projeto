const axios = require('axios')
const requi = async (cliente)=>{
    await axios.post('http://localhost:3030/savepedido',cliente)
    .then(function (response) {
        console.log('pedido salvo ',response.data);
    })
    .catch((erro) => {
        console.error('Erro!!!!!!!!!!: ', erro); //return object error
    });
}
requi()
module.exports = requi