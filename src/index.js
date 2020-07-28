const fibonacci = (n) => {
  debugger
      const array = [0, 1];
      for (let i = 2; i <= n; i++) {
          array[i] = array[i - 2] + array[i - 1];
      }
      array.shift();
      return array;
}
  module.exports = fibonacci;