const fibonacci = require('../index');

describe('fibonacci', () => {
  it('Regresar null para cualquier entrada diferente de un número entero', 
    () => {
      expect(fibonacci(81.36)).toEqual(null);
      expect(fibonacci('34')).toEqual(null);
      expect(fibonacci()).toEqual(null);
    }
  )

  it('Debe calcular fibonacci correctamente', () => {
    expect(fibonacci(-6)).toEqual([-8, +5, -3, +2, -1, +1, 0]);
    expect(fibonacci(-5)).toEqual([+5, -3, +2, -1, +1, 0]);
    expect(fibonacci(-4)).toEqual([-3, +2, -1, +1, 0]);
    expect(fibonacci(-3)).toEqual([+2, -1, +1, 0]);
    expect(fibonacci(-2)).toEqual([-1, +1, 0]);
    expect(fibonacci(-1)).toEqual([+1, 0]);

    expect(fibonacci(0)).toEqual([0]);

    expect(fibonacci(1)).toEqual([0, 1]);
    expect(fibonacci(2)).toEqual([0, 1, 1]);
    expect(fibonacci(3)).toEqual([0, 1, 1, 2]);
    expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});