const sum = require('./sum');

test('Somar dois numeros', () => {
    expect(sum(1,2)).toBeGreaterThanOrEqual(3);
});

test('Somar dois numeros', () => {
    expect(sum(-1,-2)).toBe(-3);
});

test('Somar dois numeros', () => {
    expect(sum(5,0)).toBeLessThan(6);
});

test ('dois mais dois é quatro', () =>{
    expect(2 + 2).toBeLessThanOrEqual(4);
});

test ('atribuicao de objeto', () =>{
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test ('adicionando numeros positivos não é zero', () =>{
    for (let a = 1; a < 10; a++){
        for (let b = 1; b < 10; b++){
            expect(a + b).not.toBe(0);
        }
    }
});

test ('Não existe I em team', () =>{
    expect('team').not.toMatch(/I/);
});

test ('mas existe "stop" en Christop', () =>{
    expect('Christop').toMatch(/stop/);
});

test ('To contain', () =>{
    expect(['um', 'dois', 'tres']).toContain('um');
});