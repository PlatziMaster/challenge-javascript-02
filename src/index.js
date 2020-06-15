const fibonacci = (n) => {
  let array = []
  let a = 1
  let b = 1
  for (let i = 0; i < n; i++) {
    array.push(a)
    let c = a + b;
    a = b;
    b = c;
  }
  console.log(array);
  return array
}

fibonacci(10);


module.exports = fibonacci;