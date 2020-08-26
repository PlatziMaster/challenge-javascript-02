/**
 * Fibonnacis generator
 * It's accumulate all fibonacci numbers
 */
function* fibonnaciGenerator() {
  let index: number = 0;
  let acc: number[] = [];

  while (true) {
    // acc.push(fibonacciNumber(index));
    if (index === 0) {
      acc.push(0);
    } else if (index === 1) {
      acc.push(1);
    } else {
      acc.push(acc[index - 1] + acc[index - 2]);
    }
    index++;
    yield acc;
  }
}

/**
 * Get the fibonacci of a number
 * @param n number to know
 * @returns number result
 */
function fibonnaci (n: number): number[] {
  let acc: number[] = [];
  let myFib = fibonnaciGenerator();
  for (let index = 0; index <= n; index++) {
    acc = myFib.next().value as number[];
  }
  return acc;
};

export = fibonnaci;
