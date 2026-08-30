const http = require('http');

const user = [
   { name: "sanchita",
    age: 22,
    email: "sanchita@example.com"},
    { name: "john", 
    age: 30,
    email: "john@example.com"},
    { name: "alice",
    age: 25,
    email: "alice@example.com"}
];

const server = http.createServer((req, res) => {
    //   console.log( req.url);

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the About Page</h1>');
        res.end();
    }else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Contact Page</h1>');
        res.end();
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.write("page not found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});