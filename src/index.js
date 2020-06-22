const fibonacci = (n) => {
  let result = [];

  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      result.push(0);
    }
    else if (i == 1) {
      result.push(1);
    }

    else {
      let aux = result[i-1]+result[i-2];
      result.push(aux);
    }
  }
  // Remove first element
  result.shift();

  return result;
}

module.exports = fibonacci;