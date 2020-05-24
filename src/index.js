const fibonacci = (n) => {

  const array = [n];
  for (let i = 0; i < n; i++) {
 
    if( i < 2) {
      array[i] = 1;
    } else {
   array[i] = array[i - 1] + array[i-2];
  }
}
    return array;
  }

module.exports = fibonacci;