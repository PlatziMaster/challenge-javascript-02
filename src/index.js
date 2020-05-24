const fibonacci = (n) => {
  let numeros=[1,1];
  if(n===1){
    return numeros=[1];
  }else{
    for (let i = 2; i < n; i++) {
      numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
  }
  return numeros;
}

module.exports = fibonacci;