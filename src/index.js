const fibonacci = (n) => {
  const serie = [];
  for (let x = 0; x < n; x++) {
    if (x < 2) {
      serie[x] = 1;
    } else {
      serie[x] = serie[x - 1] + serie[x - 2];
    }
  }
  return serie;
}

module.exports = fibonacci;