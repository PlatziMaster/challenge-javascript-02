

const fibonacci = (n) => {
    let numeros=[0,1];
    for (let i = 2; i < n; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
  }


  module.exports = fibonacci;