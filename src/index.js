const fibonacci = (n) => {
  if (n === 1) {
    return [1]
   } else {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
    arr.shift() 
    return arr
   }
  }

module.exports = fibonacci;