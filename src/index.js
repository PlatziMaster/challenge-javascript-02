const fibonacci = (n) => {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  let start = 0
  let end = 1
  let fibonacciResult
  let fibonacciArray = []
  for (i = 0; i < n; i++) {
    start === 0 ? fibonacciArray.push(end) : fibonacciArray.push(fibonacciResult)
    fibonacciResult = start + end
    start = end
    end = fibonacciResult
  }
  return fibonacciArray
}

module.exports = fibonacci