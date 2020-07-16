const fibonacci = (n) => {
  var arrayFibo = [1];

  if (n == 1){
    return arrayFibo;
  }else if(n == 2){
    arrayFibo.push(1);
    return arrayFibo;
  }else {
    arrayFibo.push(1);
  }

  for (var i=2; i < n; i++ ){
    arrayFibo.push(arrayFibo[i-2] + arrayFibo[i-1]);
  }
  return arrayFibo;
}


module.exports = fibonacci;