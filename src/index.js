  const fibonacci = (n) => {
      const values = [0, 1];
      for (let i = 2; i <= n; i++) {
          values[i] = values[i - 2] + values[i - 1];
      }
      values.shift();
      //console.log(values);
      return values;

  };


  module.exports = fibonacci;