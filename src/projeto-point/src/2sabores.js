const list = [
    {
        title: "🍕🍕 Sabores 🍕🍕",
        rows: [
            {
                title: "Calamussa",
                description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
            },
            {
                title: "Mista",
                description: "Mussarela, Calabresa, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
            },
            {
                title: "Frango",
                description: "Mussarela, Frango, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
            },
            {
                title: "Portuguesa",
                description: "Mussarela, Ovo, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
            },
            {
                title: "A Moda",
                description: "Mussarela, Presunto, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
            },
            {
                title: "Point",
                description: "Mussarela, Presunto, Calabresa, Frango, Bacon, Tomate, Cebola, Orégano, Catupiry, Milho e Azeitona",
            },
            {
                title: "4 Queijos",
                description: "Mussarela, Queijo Minas, Cheddar, Tomate, Cebola, Orégano, Catupiry e Milho",
            },
            {
                title: "Alho",
                description: "Mussarela, Bacon, Alho Frito, Tomate, Cebola, Orégano, Catupiry e Milho",
            },
            {
                title: "Master Point",
                description: "Mussare., Presun., Calabresa, Frango, Bacon, Chedder, Ovo, Tomate, Cebol., Oréga., Catupiry, Milho e Azeito.",
            },
            {
                title: "Banana com Chocolate",
                description: "Mussarela, Chocolate, Banana",
            },
            {
                title: "Banana com Canela",
                description: "Mussarela, Canela, Banana",
            },

        ]
    },
]
const comprando = require('./comprando')

const sabores = async (client, numero, cliente, msg, pos) => {
    if (pos == 1) {
        cliente.resumo.push(msg)
        pos = 'primeiro'
        cliente.estagioCliente = '1sabor'
    }
    else if (pos == 2) {
        msg = msg.split('\n')
        msg = msg[0]
        cliente.resumo[cliente.resumo.length - 1] = `${msg} ${cliente.resumo[cliente.resumo.length - 1]}`
        pos = 'segundo'
        cliente.estagioCliente = '2sabor'
    }
    else {
        msg = msg.split('\n')
        msg = msg[0]
        cliente.resumo[cliente.resumo.length - 1] = `${msg}/${cliente.resumo[cliente.resumo.length - 1]}`
    }
    if (pos) {
        await client
            .sendListMenu(numero, '🧾 *Sabores*', 'subTitle', `Escolha a opção referente ao ${pos} sabor:`, '*Clique aqui*', list)
            .then(() => {
            })
            .catch((erro) => {
                console.error('Error when sending: erro no pedido', erro); //return object error
            });
    }else{
        await comprando.resumo(client, numero, cliente)
    }
}
module.exports = sabores