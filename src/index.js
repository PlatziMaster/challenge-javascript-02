const fibonacci = (n, memo={}) => {
  let fibo = [];
  for(let i = 0; i < n; i++) {
    if (i <= 1){
      fibo.push(1);
    } else {
      let resultado = fibo[i - 1] + fibo[i - 2];
      fibo.push(resultado);
    }
  }
  return fibo;
}

module.exports = fibonacci;
