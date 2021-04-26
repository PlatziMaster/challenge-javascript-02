const fibonacci = (n) => {

  const arrayFibonacci = [0, 1]
  if (n > 0) {
    for (let index = 2; index <= n; index++) {
      arrayFibonacci.push(
        arrayFibonacci[index - 1] + arrayFibonacci[index - 2]
      );
    }
    arrayFibonacci.shift()
    return arrayFibonacci;


  }
  return
}





module.exports = fibonacci
