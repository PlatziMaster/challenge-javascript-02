const fibonacci = (n) => {
  let a = [];
  if(n === 1){
    a.push(1)
  }
  for(let i = 1; i < n; i++){
      if(i <= 1){
        a.push(1);
      }
      const a1 = a[i - 1]
      const a2 = a[i - 2] === undefined ? 0 : a[i - 2];
      a.push(a1 + a2);
  }

  return a
}

module.exports = fibonacci;