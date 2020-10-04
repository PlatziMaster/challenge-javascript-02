'use strict'

function sumatoria (n, elements, sum, i) {
  if (n === 1) {
    return elements
  }
  elements = elements.concat(elements[i] + sum)
  sum = elements[i]
  return sumatoria(--n, elements, sum, ++i)
}

function sumFibonacci(n) {
  return function() {
    const elements = [1]
    const sum = 0
    return sumatoria(n, elements, sum, sum)
  }
}

const fibonacci = (n) => {
  const sumTotal = sumFibonacci(n)
  return sumTotal()
}


module.exports = fibonacci;