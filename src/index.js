const fibonacci = (n) => {
  var array = [0, 1]
  var addNumber
  if (n > 1) {
    for (var i = 2; i <= n; i++) {
      addNumber = array[i - 2] + array[i - 1]
      array.push(addNumber)
    }
  }
  delete array[0]//Delete '0' from array
  return array.filter(Boolean)//Eliminate undefined item from previous step
}

module.exports = fibonacci;