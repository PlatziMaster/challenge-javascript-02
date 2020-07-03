const fibonacci = (n) => {
  function* functionFibonacci() {
    let numeroBase = [1];
    yield numeroBase;
    (numeroBase.push(1))
    yield numeroBase;
    while (true) {
      (numeroBase.push((numeroBase[numeroBase.length - 1]) + (numeroBase[numeroBase.length - 2])))
      yield numeroBase;
    };
  };
  let retornaValor = functionFibonacci();
  let resultadoFibonacci
  for (let i = 1; i <= n; i++) {
    resultadoFibonacci = retornaValor.next().value;
  };
  return resultadoFibonacci;
  }


  module.exports = fibonacci;