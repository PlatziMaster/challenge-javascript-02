const fibonacci = (n, x) => {

  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr
 

  }


module.exports = fibonacci;
