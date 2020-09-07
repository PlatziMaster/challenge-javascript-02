const fibonacci = (n) => {
  let fibonacciArray = [1];
  let F1 = 0, F2 = 1, element = 0;
    for (let i = 1; i<n; i++){
        element= F1 + F2;
        F1 = F2;
        F2 = element;
        fibonacciArray.push(element);
      }
    return fibonacciArray;
  }
  module.exports = fibonacci;