
const buttons = [
    {
        "buttonText": {
            "displayText": "🛒Continuar Comprando"
        }
    },
    {
        "buttonText": {
            "displayText": "🔐Fechar Pedido"
        }
    },
    {
        "buttonText": {
            "displayText": "🗑️Remover Item"
        }
    }
]

const buttons2 = [
    {
        "buttonText": {
            "displayText": "Sim"
        }
    },
    {
        "buttonText": {
            "displayText": "Não"
        }
    }
]
const gerarResumo = require('./gerar-resumo')
const precos = require('./precos')

const comprando = {
    comprando_itens: (client, numero, cliente, msg) => {
        var tamanho = ''
        function veriPizza() {
            return new Promise(async (resolve) => {
                if (msg.includes('Sim') || msg.includes('Não')) {
                    if (msg.includes('Sim')) {
                        let precoBorda = 2
                        if (cliente.resumo[cliente.resumo.length - 1].includes('Pequena')) precoBorda = 1
                        cliente.resumo[cliente.resumo.length - 1] += ' Com Borda'
                        cliente.total += precoBorda
                    }
                    await client
                        .sendText(numero, `OK! Uma pizza *${cliente.resumo[cliente.resumo.length - 1]}* foi adicionada ao seu pedido ✅`)
                        .catch((erro) => {
                            console.error('Error when sending:erro ao comprar pizza ', erro); //return object error
                        });
                    resolve(true)
                    return;
                } else {

                    Object.keys(precos.tabelaDePrecosPizzas).forEach(async (key) => {
                        if (msg.includes(key) || msg.includes('Sim') || msg.includes('Não')) {
                            if (msg.includes('Pequena')) {
                                cliente.resumo.push(key + "-Pequena");
                                cliente.total += precos.tabelaDePrecosPizzas[key]["pequena"];
                                tamanho = 'Pequena';
                            }
                            else if (msg.includes('Média')) {
                                cliente.resumo.push(key + "-Média");
                                cliente.total += precos.tabelaDePrecosPizzas[key]["media"];
                                tamanho = 'Média';
                            }
                            else if (msg.includes('Grande')) {
                                cliente.resumo.push(key + "-Grande");
                                cliente.total += precos.tabelaDePrecosPizzas[key]["grande"];
                                tamanho = 'Grande';
                            }
                            if (tamanho != '') {
                                await client
                                    .sendButtons(numero, 'Com Borda?', buttons2, 'Pequena:+R$1.00\nMédia e Grande:+R$2.00')
                                    .catch((erro) => {
                                        console.error('Error when sending:erro ao comprar pizza ', erro); //return object error
                                    });

                            }

                        }
                    })
                    if (tamanho == '') {
                        Object.keys(precos.tabelaDePrecosBurger).forEach(async (key) => {
                            if (msg.includes(key)) {
                                cliente.resumo.push(key)
                                cliente.total += precos.tabelaDePrecosBurger[key]
                                await client
                                    .sendText(numero, 'OK! Um *' + key + '* foi adicionado ao seu pedido✅')
                                    .catch((erro) => {
                                        console.error('Error when sending: erro ao comprar burger ', erro); //return object error
                                    });
                                resolve(true)
                                return;
                            }
                        })
                    }
                }
            })
        }
        veriPizza()
            .then(async () => {
                await comprando.resumo(client, numero, cliente)
            })
            .catch((err) => {
                console.log(err)
            });
    },
    resumo: async (client, numero, cliente) => {
        await client
            .sendText(numero, `Aqui está um resumo do seu pedido até agora:\n\n${await gerarResumo(cliente.resumo)}\n*Totalizando:* R$${cliente.total}.00`)
            .catch((erro) => {
                console.error('Error when sending:', erro); //return object error
            });
        await client
            .sendButtons(numero, 'Você deseja:', buttons, ' ')
            .then(() => {
                cliente.estagioCliente = 'continuar-fechar_pedido-remover'
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    }

}
module.exports = comprando