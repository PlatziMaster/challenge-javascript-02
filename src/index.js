function fibonacci(n) {
  // Initialize cache map with two first fibonacci numbers
  const cache = new Map()
  cache.set(1, 1)
  cache.set(2, 1)

  // if n = 1 return the corresponding value
  if (n === 1) {
    return [cache.get(n)]
  }

  // Recursively memoize the fibonacci sequence
  function memoize(n, cache) {
    if (cache.has(n)) {
      return cache.get(n)
    }

    let value = memoize(n - 1, cache) + memoize(n - 2, cache)
    // store the value found in cache
    cache.set(n, value)

    return value
  }

  memoize(n, cache)

  // Map.values() return an object iterator
  // use spread operator(...) to returns an array
  return [...cache.values()]
}

module.exports = fibonacci
