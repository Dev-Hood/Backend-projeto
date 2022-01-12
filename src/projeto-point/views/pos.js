var alturaAtual = document.getElementsByClassName('super')
console.log(typeof alturaAtual)
var btn = document.getElementsByClassName('btn-pronto')

var arr = Object.keys(alturaAtual).forEach((element,ind)=>{
    let altura = alturaAtual[element].scrollHeight
    btn[ind].style = `top:${altura-20}px;`
})
