const fibonacci = (n) => {
  var baseSequence = [1, 1]

  for (let i = 0; i < n; i++) {
    fiboNum = baseSequence[i] + baseSequence[i + 1]
    baseSequence.push(fiboNum)
  }

  var fibonacciFinal = baseSequence.slice(0, n)

  return fibonacciFinal


}


module.exports = fibonacci;