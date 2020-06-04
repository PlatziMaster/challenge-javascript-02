const fibonacci = (n) => {

  if (n === 0) {
    return [0]
  }
  const array = [1];

  for (let i = 1; i < n; i++) {
    const a = array[i - 1];
    const b = (array[i - 2] ? array[i - 2] : 0)
    array.push(a + b);
  }
  return array;
}

module.exports = fibonacci;
