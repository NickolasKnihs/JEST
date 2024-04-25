const sub = require('./sub');

test('Subtrair dois numeros', () => {
    expect(sub(4,2)).not.toBe(8);
});

test('Subtrair dois numeros', () => {
    expect(sub()).toBeNull;
});

test('Subtrair dois numeros', () => {
    expect(sub(4,0)).toBeGreaterThan(2);
});

test('Subtrair dois numeros', () => {
    expect(sub(0,60)).toBe(-60);
});