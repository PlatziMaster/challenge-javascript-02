const fibonacci = (n) => {
  let fibonacciArray = [0, 1]

  for (let i = 2; i <= n ; i++)
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1])

  fibonacciArray.shift(0)
  return fibonacciArray;
}


module.exports = fibonacci;