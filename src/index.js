const fibonacci = (n) => {
  const calculoArray = [1, 1];

  if(n === 1 ) {
    return [1];
  }

  if (n > calculoArray.length){
    for (let i = 0; i < n - 2; i++) {
      calculoArray.push(calculoArray[i] + calculoArray[i + 1])
    }

    return calculoArray;
  }
  return calculoArray;
}


module.exports = fibonacci;