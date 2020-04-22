const fibonacci = (n) => {
  if (n < 0) {
    throw new Error('No puede ser negativo');
  }

  function* fibo() {
    yield 0;
    yield 1;
    yield 1;
    let a = 1;
    let b = 1;
    while (true) {
      const nextNumber = a + b;
      a = b;
      b = nextNumber;
      yield nextNumber;
    }
  }

  let array = [];
  let f = fibo();

  for (let i = 0; i <= n; i++) {
    array.push(f.next().value);
  }

  return array;
}


module.exports = fibonacci;