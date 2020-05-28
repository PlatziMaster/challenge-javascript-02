const fibonacci = (n) => {
  let result = [1];
  let array = [1, 1];

  if (n == 2) {
    result = array;
  }else if(n > 2){
      for(let j = 2; j < n; j++){
        let prev = array[j - 2];
        let next = array[j - 1];
        suma = prev + next
        array.push(suma)
      }
      result = array;
  }
  return result;
}


  module.exports = fibonacci;