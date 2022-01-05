async function gerarResumo(resumo){
    let todoResumo=''
    const countMap = {};
    for (const element of resumo) {
      if (!countMap[element]) {
        // Se ainda não existir elemento, definimos como um, já que
        // estamos na primeira ocorrência.
        countMap[element] = 1;
      } else {
        // Caso contrário, incrementamos um no número atual.
        countMap[element] += 1;
      }
    }
    Object.keys(countMap).forEach((key) => {
        todoResumo+=`*${countMap[key]}x - ${key}* \n`
    });
    return todoResumo;
}
module.exports = gerarResumo