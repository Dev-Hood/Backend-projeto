const axios = require('axios')
const requi = async ()=>{
    await axios.post('http://localhost:3030/pedidos', {
        "firstName" : "Fred",
        "lastName" : "Flintstone"
    })
    .then(function (response) {
        console.log('A resposta para a requisição foi: '+JSON.stringify(response.data));
    })
    .catch((erro) => {
        console.error('Erro!!!!!!!!!!: ', erro); //return object error
    });
}
requi()
module.exports = requi
