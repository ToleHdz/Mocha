var assert = require('assert')

var calculos = require('./calculos.js');

//iniciamos el test con el encabezado en este caso
describe('Test para calculadora', () => 
{
	//mensaje que mandamos para indicar el resultado esperado
	it('returns 1 + 1 = 2', (done) => 
	{
		assert.equal(calculos.suma(1, 1), 2);		//verifica que el valor que regresa la funcion es el valor esperado
													//invoca done cuando el test este completo.
		done();
	});

	it('returns 2 * 2 = 4', (done) => 
	{
		assert.equal(calculos.multiplicacion(2, 2), 5);
		// Invoke done when the test is complete.
		done();
	});
});


//fuente
//https://gist.github.com/soheilhy/867f76feea7cab4f8a84