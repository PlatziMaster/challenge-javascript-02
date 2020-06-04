const fibonacci = (n) => {
  const secuencia = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    let newNumber = 0;
    newNumber = secuencia[i] + secuencia[i + 1];
    secuencia.push(newNumber);
  }
  secuencia.shift();
  return secuencia;
};

module.exports = fibonacci;
