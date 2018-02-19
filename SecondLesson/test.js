var assert = require('assert')
var http = require('http')

var server = require('./server.js')

describe('HTTP Server Test', () => 
{
	// The function passed to before() is called before running the test cases.
	before(() => 
	{
		server.listen(3000);
	});

	// The function passed to after() is called after running the test cases.
	after(() => 
	{
		server.close();
	});

	describe('/', () => 
	{
		it('Hello World', (done) => 
		{
			http.get('http://127.0.0.1:3000', (response) => 
			{
				// Assert the status code.
				assert.equal(response.statusCode, 200);

                var body = '';
				
				response.on('data', (d) =>
				{
					body += d;
				});
				
				response.on('end', () =>
				{
					// Let's wait until we read the response, and then assert the body
					// is 'Hello :D'.
					assert.equal(body, 'Hello :D');
					done();
				});
			});
		});
	});
});