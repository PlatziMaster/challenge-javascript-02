const fibonacci = (n) => {
  var secuencia = [];
  var a, b, resultado;
  a = 0;
  b = 1;
  resultado = b;
  for (var i = 1; i <= n; i++) {
    secuencia.push(resultado);
    resultado = a + b;
    a = b;
    b = resultado;
  }
  return secuencia
}
fibonacci(10)
module.exports = fibonacci;
