const fibonacci = (n) => {
  var array = [];
  
  if (n === 1) {
    array = [1]; 
    return array;
  }

  else{
    array = [1,1];
    for (var i = 2; i < n; i++ ) {

      array[i] = array[i - 2] + array[i -1];
    }
  }
  return array;
}
  
  module.exports = fibonacci;