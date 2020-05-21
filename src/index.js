const fibonacci = (n) => {
  var secuencia = new Array(n).fill(1)
  var secuenciaFibonacci = secuencia.map(function () {
    var a, b, resultado;
    a = 0;
    b = 1;
    resultado = b;
    for (var i = 1; i <= secuencia.length; i++) {
      var c = resultado;
      resultado = a + b;
      a = b;
      b = resultado;
      return c;
    }
  })
  return secuenciaFibonacci
}
fibonacci(10)
module.exports = fibonacci;