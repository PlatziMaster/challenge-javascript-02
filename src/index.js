const fibonacci = (n) => {
  const numbers = new Array(n);

  if (n === 1) {
    numbers[0] = 1;
  } else {
    numbers[0] = 1;
    numbers[1] = 1;
    for (let index = 2; index < n; index++) {
      numbers[index] = numbers[index - 2] + numbers[index - 1];
    }
  }
  return numbers;
}


  module.exports = fibonacci;