const fibonacci = (n) => {
    let arreglo = [];
    for(let i = 0; i < n; i++){
      (i === 0) ? arreglo.push(1) : arreglo.push(arreglo[i-2] + arreglo[i-1] || 1)
    }
    return arreglo;
  }

  module.exports = fibonacci;