const fibonacci = (n) => {
  let arrayFibonacci = [];
  let positionArray = 0;
  for (let index = 1; index <= n; index++) {
    if (index === 1) {
      arrayFibonacci.push(equationFibonacci(1, 0));
    } else if (arrayFibonacci.length === 1) {
      arrayFibonacci.push(
        equationFibonacci(arrayFibonacci[positionArray - 1], 0)
      );
    } else {
      arrayFibonacci.push(
        equationFibonacci(
          arrayFibonacci[positionArray - 1],
          arrayFibonacci[positionArray - 2]
        )
      );
    }
    positionArray++;
  }

  return arrayFibonacci;
};

const equationFibonacci = (n1, n2) => {
  return n1 + n2;
};

module.exports = fibonacci;
