const express = require('express'),
      router = express.Router(),
      request = require('request'),
      bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/', function (req, res) {
    request({ url: 'https://app.viima.com/api/customers/2027/items/?=1509128849281', json: true }, function (error, response, body) {

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
});


// var requestLoop = setInterval(function(){
//     request({
//         url: "https://hooks.slack.com/services/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",
//         method: "GET",
//         timeout: 5000,
//         followRedirect: true,
//         maxRedirects: 10
//     },function(error, response, body){
//         if(!error && response.statusCode == 200){
//             console.log('sucess!');
//         }else{
//             console.log('error' + response.statusCode);
//         }
//     });
//   }, 60000);

module.exports = router;