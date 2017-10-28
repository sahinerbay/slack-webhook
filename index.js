var express = require('express');
var app = express();
var request = require('request');

//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on. 
//process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
var port = process.env.PORT || 3000;

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/viima', function (req, res, next) {

    res.send('Hello World!')
    // request({
    //     uri: 'https://app.viima.com/api/customers/2027/items',
    //     // qs: {
    //     //     api_key: '123456',
    //     //     query: 'World of Warcraft: Legion'
    //     // }
    // }).pipe(res);
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);