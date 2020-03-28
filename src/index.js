const fibonacci = n => {
  if (n === 0 || n === 1) {
    return [1]
  }

  const sequence = [1, 1]

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]
  }

  return sequence
}

module.exports = fibonacci
