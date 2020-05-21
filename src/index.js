const fibonacci = (max) => {
  // En matemáticas, los números de Fibonacci son los números en la siguiente secuencia entera, llamada secuencia de Fibonacci, y se caracterizan por el hecho de que cada número después de los dos primeros es la suma de los dos anteriores:
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  response = [];
  first = 0;
  second = 1;
  value = 0;
  for (let index = 0; index < max; index++) {
    if (index === 0) {
      response.push(second);
    } else {
      value = first + second;
      response.push(value);
      first = second;
      second = value;
    }
  }
  return response;
};

module.exports = fibonacci;
