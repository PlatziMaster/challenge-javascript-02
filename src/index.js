const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let sum;
  const fibonachisArray = [];
  for(let fibonacciNumbers = 0; fibonacciNumbers < n; fibonacciNumbers++) {
    sum = a + b;
    b = a;
    a = sum;
    fibonachisArray.push(sum)
  }
  return fibonachisArray
}

fibonacci(1)
fibonacci(2)
fibonacci(3)
fibonacci(4)
fibonacci(5)
fibonacci(6)
fibonacci(7)
fibonacci(8)
fibonacci(9)
fibonacci(10)


module.exports = fibonacci;