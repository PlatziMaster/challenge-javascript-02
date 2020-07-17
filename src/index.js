const fibonacci = (n) => {
  var a = 0;
  var b = 1;
  fibo_list = [];
  fibo_list.push(1);

  for (let i = 1; i < n; i++) {
    let add = a + b;
    a = b;
    b = add;
    fibo_list.push(add);
  }
  return fibo_list;
};
module.exports = fibonacci;

