const fibonacci = (n) => {
  const numbers = [1, 1];
  if (n === 1) {
    numbers.pop()
  } else {
    for (let i = 2; i < n; i++) {
      numbers.push(numbers[i-2]+numbers[i-1])
    }
  }
  return numbers;
}
  module.exports = fibonacci;