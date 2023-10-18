const calculator = require('./calculator');

test('squaring a number', () => {
    expect(calculator.square('1')).toBe(1);
  });