const fibonacci = (n) => {

  let a = 0;
  let b = 1;
  let c = 0;
  let array = new Array(n);

  for (let i = 0; i < n; ) {
    c = a + b;
    a = b;
    b = c;
    array[i] = c;
    array[i++] = a;
  }
  
  return array;
}


module.exports = fibonacci;