
const fibonacci = (n) => {
  const fibonacciArray = []
  for (let index = 0; index < n; index++) {

    fibonacciArray[index-2] ?
      fibonacciArray.push( fibonacciArray[index-1] + fibonacciArray[index-2]) :
      fibonacciArray.push(1)
    }
  return fibonacciArray
}

module.exports = fibonacci;