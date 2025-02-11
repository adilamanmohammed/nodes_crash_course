import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req,res) => {

    // // Set the response HTTP header with HTTP status and Content type
    // res.setHeader('Content-Type', 'text/html');
    // // Set the HTTP status of the response
    // res.statusCode = 404;
    // // h1 tag with Hello World!!! text


    console.log(req.url); // this line will print the requested URL
    console.log(req.method); // this line will print the request method

    res.writeHead(200, {'content-type' : 'text/html'});
    res.end('<h1>Hello World!!!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});