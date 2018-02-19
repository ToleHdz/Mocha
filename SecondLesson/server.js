var http = require('http')

var server = http.createServer((request, response) => 
{
	response.writeHead(200)
	response.end('Hello :D')
});

exports.listen = (port) => 
{
	server.listen(port)
	console.log('Listening on port ' + port)
}

exports.close = () => 
{
	server.close();
}