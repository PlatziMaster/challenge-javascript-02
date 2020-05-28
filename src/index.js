const fibonacci = (n) => {
  // Condiciones de parada
  if (n <= 1) {
    return [1];
  }

  if (n === 2) {
    return [1, 1];
  }

  // Recursividad
  const fibNm1 = fibonacci(n - 1);
  return [...fibNm1, fibNm1[fibNm1.length - 2] + fibNm1[fibNm1.length - 1]];
};

module.exports = fibonacci;
