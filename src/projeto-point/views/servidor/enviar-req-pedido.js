const axios = require('axios')
const requi = async (cliente) => {
    await axios.post('http://localhost:3030/savepedido', {
        telefone:'5538999095003@c.us',
        estagioCliente: 'pagamento',
        resumo: [ 'Banana com Chocolate-Grande Com Borda' ],
        total: 27,
        pagamento: 'PIX',
        endereco: 'a',
        hora: 17,
        min: 6} )
        .then(function (response) {
            console.log('pedido salvo ', response.data);
        })
        .catch((erro) => {
            console.error('Erro aqui porra: ', erro); //return object error
        });
}
requi()
module.exports = requi

/*
{
        telefone:'5538999095003@c.us',
        estagioCliente: 'pagamento',
        resumo: [ 'Banana com Chocolate-Grande Com Borda' ],
        total: 27,
        pagamento: 'PIX',
        endereco: 'a',
        hora: 17,
        min: 6}*/