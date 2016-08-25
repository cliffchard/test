const http = require('http');

const port = 3000;
const hostname = '0.0.0.0'

http.createServer((req, res) => {
	if (req.url == '/') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World !!!\n');
	} else {
		res.statusCode = 404;
		res.end('Err');
	}
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
