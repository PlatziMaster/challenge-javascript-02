const fibonacci = (n) => {

  let array = [0,1]
  let coun

  while (n > 0){
    coun = array[array.length-1]+array[array.length-2]
    array.push(coun)
    n--
  }
    array.pop()
    array.shift()

    return(array)
}

  module.exports = fibonacci;