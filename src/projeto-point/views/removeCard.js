
const content = document.getElementById('content')
content.addEventListener('click', async (e) => {
    const idRemove = e.target.dataset.remove
    console.log(idRemove);
    if (idRemove) {
        ConfirmDialog(idRemove);
    }
})

function ConfirmDialog(idRemove) {
    $('<div class= "confirm" ></div>').appendTo('body')
        .dialog({
            modal: true,
            zIndex: 10000,
            autoOpen: true,
            title: 'Pedido pronto?',
            width: '300px',
            textalign: 'center',
            resizable: false,
            buttons: {
                Sim: function () {
                    // $(obj).removeAttr('onclick');                                
                    // $(obj).parents('.Parent').remove();
                    deletarCard(idRemove)
                    $(this).dialog("close");
                },
                Não: function () {
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                $(this).remove();
            },

        });
};

async function deletarCard(idRemove) {
    const response = await fetch('http://localhost:3030/captpedidos')
    const value = await response.json()
    const card = document.querySelector(`[data-id="${idRemove}"]`)
    console.log(card);
    card.remove()
    for (let index = 0; index < value.length; index++) {
        if (value[index].telefone == idRemove) {
            var pos = index
            break;
        }
    }
    axios.delete('http://localhost:3030/captpedidos', pos)
        .then(function (response) {
            console.log(response);
        })
        .catch((erro) => {
            console.error('Erro!!!!!!!!!!: ', erro); //return object error
        });
}
