const divide = require('./toThrow');

test('lança uma exceção ao dividir por zero', () => {
    expect(() => {
      divide(10, 0);
    }).toThrow('Divisão por zero não é permitida.');
  });