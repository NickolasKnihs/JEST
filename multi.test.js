const multi = require('./multi');

test('Multiplicar dois numeros', () => {
    expect(multi(2,2)).toEqual(4);
});

test('Multiplicar dois numeros', () => {
    expect(multi(2.5,1)).toBeCloseTo(2.5);
});