const fibonacci = (n) => {
  let result = [];
  for(let i = 0; i <= n-1; i++){
    if (i == 0 || i == 1){
      result[i] = 1;
    } else
        result[i] = result[i-1] + result[i-2];
  }
  return result;
}


  module.exports = fibonacci;