var assert = require('assert');

var calculos = require('./calculos.js');

describe('Calculator Tests', () =>
{
	describe('Addition Tests', () => 
	{
		it('returns 1 + 1 = 2', (done) => 
		{
			assert.equal(calculos.suma(1, 1), 2);
			done();
		});

		it('returns 1 + -1 = 0', (done) =>
		{
			assert.equal(calculos.suma(1, -1), 0);
			done();
		});
	});

	describe('Multiplication Tests', () =>
	{
		it('returns 2 * 2 = 4', (done) =>
		{
			assert.equal(calculos.multiplicacion(2, 2), 4);
			done();
		});

		it('returns 0 * 4 = 4', (done) =>
		{
			assert.equal(calculos.multiplicacion(0, 2), 4);
			done();
		});
	});
});