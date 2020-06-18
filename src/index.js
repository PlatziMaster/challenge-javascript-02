const fibonacci = (n) => {
  let initialValue = 0
  let growthValue = 1
  let accumulatedArray = [1]
  for (let i = 0; i < n-1 ; i++) {
    let newValue = initialValue + growthValue 
    initialValue = growthValue
    growthValue = newValue
    accumulatedArray.push(newValue)
  }
  return accumulatedArray
}

module.exports = fibonacci;