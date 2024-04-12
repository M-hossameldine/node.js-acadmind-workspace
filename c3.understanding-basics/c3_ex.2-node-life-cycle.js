const http = require("http");

/*
 * The Server is an example of Node.js Event Loop
 * process.exit: would terminate the event loop
 */

const server = http.createServer((req, res) => {
  console.log("Request", req);

  // process.exit(); // * would terminate the event loop if triggered after executing the first http request
});

server.listen(5000); // localhost:5000
