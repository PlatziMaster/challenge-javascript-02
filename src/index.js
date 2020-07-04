const fibonacci = (n, memo={}) => {
  if (n === 0 || n === 1){
    return 1;
  } else {
    try {
      return memo[n]
    } catch {
      resultado = fibonacci(n-1, memo) + fibonacci(n - 2, memo);
      memo[n] = resultado;
      return resultado;
    }
  }


  module.exports = fibonacci;
