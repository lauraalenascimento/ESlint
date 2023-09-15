const { somaNumeros } = require('../index');

test('A função teve somar dois numeros', () => {
  const esperado = 1000;
  const retornado = somaNumeros(800, 200);

  expect(retornado).toBe(esperado);
});
