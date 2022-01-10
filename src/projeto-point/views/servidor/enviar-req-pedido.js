const axios = require('axios')
const requi = async (cliente)=>{
    await axios.post('http://localhost:3030/pedidos', {
        telefone:'999495116',
        estagioCliente:'inicio',
        resumo:['X-Bacon', 'Calamussa Grande Com Borda', 'X-Mamute'],
        total:30,
        pagamento:'Cartão',
        endereco:'Rua projetada C, 36'
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
