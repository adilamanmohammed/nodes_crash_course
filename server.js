import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req,res) => {

    

    res.writeHead(200, {'content-type' : 'text/html'});
    res.end('<h1>Hello World!!!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});