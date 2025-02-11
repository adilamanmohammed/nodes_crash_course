import http from 'http';
const PORT = 8000;

const server = http.createServer((req,res) => {

    // // Set the response HTTP header with HTTP status and Content type
    // res.setHeader('Content-Type', 'text/html');
    // // Set the HTTP status of the response
    // res.statusCode = 404;
    // // h1 tag with Hello World!!! text

    res.writeHead(200, {'content-type' : 'text/html'});
    res.end('<h1>Hello World!!!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});