const http = require('http');
const server = http.createServer();
const requestLoop = require('./slack_webhook/main');

//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on. 
//process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
const port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});