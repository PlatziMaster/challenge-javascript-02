const fibonacci = (n) => {
  numbers = [0, 1]
  for(i = 1; i < n; i++) {
    numbers.push(numbers[i - 1] + numbers[i])
  }
  numbers.shift()
  return numbers
}
  module.exports = fibonacci;