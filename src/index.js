const fibonacci = (n) => {
  let serie = [1];
  if (n === 1) {
    return serie;

  } else {
    for (let i = 0; i < n - 1; i++) {
      previous = serie[i - 1] || 0;
      serie.push(serie[i] + previous)
    }
  }
  return serie;
}


module.exports = fibonacci;