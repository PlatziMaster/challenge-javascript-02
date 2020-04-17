const fibonacci = (n) => {
  if (n < 0) {
    return console.error(new Error('No puede ser negativo'));
  }

  let array = [];

  for (let i = 0; i <= n; i++) {
    array.push(fibo(i));
  }

  return array
}

const fibo = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibo(n-1) + fibo(n-2);
}

module.exports = fibonacci;