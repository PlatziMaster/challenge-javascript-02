const fibonacci = (n) => {
  const data = [];

  for (let index = 0; index < n; index++) {
    if (index === 0) {
      data.push(0)
    }
    else if(index === 1) {
      data.push(1)
    } else {
      data.push(data[index - 2] + data[index - 1])
    }
  }
  return data
}

fibonacci(5)


module.exports = fibonacci;