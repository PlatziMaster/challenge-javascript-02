/**
 * Get the fibonacci of a number
 * @param n number to know
 * @returns number result
 */
function fibonacciNumber(n: number): number {
  if (n === 0) return 0;

  if (n === 1) return 1;

  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

/**
 * Get the list of numbers to create in the fibonacci of a number
 * @param n number to know
 * @returns array with the numbers that create the fibonacci result
 */
function fibonacci(n: number): number[] {
  if (n === 0) return [0];

  let acc: number[] = [];

  for (let index = 1; index <= n; index++) {
    acc.push(fibonacciNumber(index));
  }

  return acc;
}

export = fibonacci;
