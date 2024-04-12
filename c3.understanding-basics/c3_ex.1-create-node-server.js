const http = require("http");

/*
 * http: core node module that to execute http requests
 * http.createServer: creates node.js server and returns a server object
 * server.listen: trigger the node.js server
 */

const server = http.createServer((req, res) => {
  console.log("Request", req);
});

server.listen(5000); // localhost:5000
