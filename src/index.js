const fibonacci = n => {
  let acum = new Array();
  for (let index = 0; index < n; index++) {
    acum.push(calculateNumber(index));
  }
  return acum;
}

const calculateNumber = numero => {
  if (numero <= 1) return 1;
  return calculateNumber(numero - 1) + calculateNumber(numero - 2);
}

module.exports = fibonacci;