var express = require('express');
var conslidate = require('consolidate');
var http = require('http');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var jsonParser = bodyParser.json({Content: 'application/json'});
// app.get('/', function (req, res) {

    // app.set('port', (process.env.PORT || 5010));
// });
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// app.use(jsonParser);
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// var app  = express();
app.configure(function(){
    app.set('port', (process.env.PORT || 5010));
    app.use(express.bodyParser());
});
var server = http.createServer(app);


// app.configure(function(){
//     app.use(express.bodyParser());
//     app.use(app.router);
// });

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
// require('./routers/galleryrouter')(request, app);
// require('./routers/Update')(app, BaseSixFour);
require('./routers/userRoutes.js')(app);
//app.get('port')
server.listen(8080, function () {
    // console.log('thuc hien lien ket'+server.address().port);
    // console.log('thuc hien lien ket'+server.address().port);
});
