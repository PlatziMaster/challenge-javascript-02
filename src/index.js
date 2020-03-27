const fibonacci = n => {
  if (n === 0 || n === 1) {
    return [1]
  }

  const sequence = [1, 1]
  let next = 2

  while (sequence.length !== n) {
    sequence[next] = sequence[next - 1] + sequence[next - 2]
    next++
  }

  return sequence
}

module.exports = fibonacci
