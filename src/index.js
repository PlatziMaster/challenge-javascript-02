const fibonacci = (n) => {
  var array = [n];

  for (var i = 0; i < n; i++) {
    if (i >= 0 && i <= 1){
        if(i === 0){
          array[i] = 1;
        }else{
          array[i] = 1;
        }
      }else{
          array[i] = array[i-1] + array[i-2];        
      }
    }
  return array;  
}


  module.exports = fibonacci;