const dinamicFibonacci = (numberToCalc) => {
  if (!this.cache) {
    this.cache = {}
  }

  if (numberToCalc === 0 || numberToCalc === 1) {
    return 1
  }

  this.cache[numberToCalc] = dinamicFibonacci(numberToCalc - 1) + dinamicFibonacci(numberToCalc - 2)
  return this.cache[numberToCalc]
}

const fibonacci = (n) => {
  let sequence = []
  for (let i = 1; i <= n; i++) {
    let numberToCalc = i -1
    sequence.push(dinamicFibonacci(numberToCalc))
  }

  return sequence
}

module.exports = fibonacci;