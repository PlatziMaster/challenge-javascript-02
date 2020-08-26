const fibonacciGenerator = require('../fibonacciGenerator');

describe('fibonacci generator', () => {
  const times = 40000000;

  it('Debe calcular fibonacci correctamente', () => {
    expect(fibonacciGenerator(1)).toEqual([0, 1]);
    expect(fibonacciGenerator(2)).toEqual([0, 1, 1]);
    expect(fibonacciGenerator(3)).toEqual([0, 1, 1, 2]);
    expect(fibonacciGenerator(4)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacciGenerator(5)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacciGenerator(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibonacciGenerator(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacciGenerator(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacciGenerator(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacciGenerator(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it(`Time to execute with generator. Times: ${times}`, () => {
    expect(fibonacciGenerator(times).length).toEqual(times + 1)
  })
});