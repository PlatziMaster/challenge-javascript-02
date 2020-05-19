const fibonacci = (n) => {
  const serieFibo = [];
  let valorSerie0 = 0;
  let valorSerie1 = 1;
  let valorIncremento;

  if (n < 2) {
    serieFibo.push(n);
  } else {
    for (let i = 0; i < n; i ++) {
      valorIncremento = valorSerie0 + valorSerie1;
      valorSerie0 = valorSerie1;
      valorSerie1 = valorIncremento;
      serieFibo.push(valorSerie0);
    }
  }

  return serieFibo;
}


module.exports = fibonacci;