module.exports = function (app) {
    app.use('/viima', require('./routes/viima'));
};