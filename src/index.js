const fibonacci = (number) => {
  let fib1 = 0;
  let fib2 = 1;
  let sequenceFib = [];
  let temp;

  for (let i = 0; i < number; i++) {
    sequenceFib.push(fib2);
    temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
  }

  return sequenceFib;
};

module.exports = fibonacci;
