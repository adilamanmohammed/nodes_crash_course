import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req,res) => {
    // the below lines are used to set the response header
    // in detail we are setting the content type of the response

    try {
        // check if GET request
        if (req.method === 'GET') {
            if (req.url === '/') { // if the request url is '/' then the below code will execute
                res.writeHead(200, {'content-type' : 'text/html'}); // setting the response header
                res.end('<h1>Home Page</h1>'); // sending the response
            } else if (req.url === '/about') { // if the request url is '/about' then the below code will execute
                res.writeHead(200, {'content-type' : 'text/html'}); // setting the response header
                res.end('<h1>About</h1>'); // sending the response
            } else {  // if the request url is not '/' or '/about' then the below code will execute
                res.writeHead(404, {'content-type' : 'text/html'}); // setting the response header
                res.end('<h1>Not found</h1>'); // sending the response
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        // 500 is the status code for internal server error
        res.writeHead(500, {'content-type' : 'text/plain'}); // setting the response header
        res.end('Server Error'); // sending the response
    }

    
});
// explain the below code
// code will start the server and listen on port 
server.listen(PORT, () => {// server is listening on port 
    console.log(`Server is running on port ${PORT}`); // this will print on console when server starts
});