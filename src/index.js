const fibonacci = (n) => {
  let  a = 1; 
  let  y;
  let  f = [];
  for (let i = 0; i < n; i++) {
    if(i < 2) {
        f.push(a);
      }else{
        y = f[i - 2] + f[i - 1];
        f.push(y);
    }
  }
  return f;
}


  module.exports = fibonacci;