const fibonacci = (n) => {

  var arr = []

  let counter = 0

  while (counter < n) {

    if (counter == 0) {
      arr.push(1)
    } else {
      currentElement = arr.length - 1
      if (arr.length < 2) {
        arr.push(arr[currentElement])
      } else {
        arr.push(arr[currentElement] + arr[currentElement - 1])
      }
    }
    counter++

  }

  return arr;


}

module.exports = fibonacci;