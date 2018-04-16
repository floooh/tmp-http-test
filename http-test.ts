import * as http from "http";

console.log('Listening on localhost:8080');
http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    console.log("HTTP request received!");
    response.write('Hello World!');
    response.end();
}).listen(8080);