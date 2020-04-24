const isNumber = require('is-number');

const fibonacci = (n) => {

  if(!isNumber(n)){
    throw new Error('Invalid format');
  }

  let numberFibonacci = [1];
  const nextFibonacci = getFibonacci();

  while (numberFibonacci.length < n) {
    numberFibonacci.push(nextFibonacci.next().value);
  }
    
  return numberFibonacci;
}

function* getFibonacci() {
  let a = 0;
  let b = 1;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}

module.exports = fibonacci;