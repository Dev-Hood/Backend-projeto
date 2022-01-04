function countItems(arr) {
    const countMap = {};
  
    for (const element of arr) {
      if (!countMap[element]) {
        // Se ainda não existir elemento, definimos como um, já que
        // estamos na primeira ocorrência.
        countMap[element] = 1;
      } else {
        // Caso contrário, incrementamos um no número atual.
        countMap[element] += 1;
      }
    }
    
    return countMap;
  }
  
  const arr = ['1', '1', '2', '2', '2'];
  console.log(countItems(arr));