const fibonacci = (n) => {
  var secuenciafibo = [1];

  if (n <= 1){
        return secuenciafibo;
      }else {
        secuenciafibo.push(1);
      }

  for (var i=2; i < n; i++ ){
        secuenciafibo.push(secuenciafibo[i-2] + secuenciafibo[i-1]);
      }
      return secuenciafibo;

  }

  module.exports = fibonacci;