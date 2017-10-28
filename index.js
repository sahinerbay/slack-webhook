var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on. 
//process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
var port = process.env.PORT || 3000;

//http method -GET, POST, DELETE...
app.get('/', function (req, res) {
    res.end("<h1>Hello World</h1>");
});

app.post('/api', function (req, res) {
    request({ url: 'https://app.viima.com/api/customers/2027/items/?_=1509128849281', json: true }, function (error, response, body) {

        let data = {
            response_type: 'in_channel', // public to the channel 
            text: `${body[0].description}`
        };

        if (!error && response.statusCode == 200) {
            res.send(data);
            console.log(req.body)
        } else {
            console.log('error:', error); // Print the error if one occurred
        }
    });
})
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});