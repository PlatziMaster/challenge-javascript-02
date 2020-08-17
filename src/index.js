const fibonacci = (n) => {
  numberFibonacci = [0, 1]

  for (i = 2; i <= n; i++) {
    numberFibonacci[i] = numberFibonacci[i - 1] + numberFibonacci[i - 2]
  }

  numberFibonacci.shift()

  return numberFibonacci
}

module.exports = fibonacci;