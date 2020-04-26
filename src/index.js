const fibonacci = (n) => {
  let aux = 0;
  let aux2 = 1;
  const secuencia = [];

  for (let i = 1; i <= n; i++) {
    secuencia.push(aux2);
    const suma = aux + aux2;
    aux = aux2;
    aux2 = suma;
  }
  return secuencia;
};

module.exports = fibonacci;
