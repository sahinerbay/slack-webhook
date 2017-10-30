var express = require('express');
var app = express(),
    bodyParser = require('body-parser'),
    sendRequest = require('./slack/command/request'),
    requestLoop = require('./slack/webhook/main');

//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on. 
//process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
var port = process.env.PORT || 3000;

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/', urlencodedParser, function (req, res) {
    sendRequest(req.body)
     .then((data)=> {
         res.send(data);
     })
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});