var express = require('express');
var app = express();
var router = require('./router')(app);

//In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on. 
//process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
var port = process.env.PORT || 3000;

// Error Handling
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

module.exports = app;