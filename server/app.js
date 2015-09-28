var express = require('express');
var epsilon = require('./public/assets/data/epsilon.json');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(request, response){
    console.log("hit / endpoint");
    response.sendfile(__dirname + '/public/views/index.html');
});

app.get('/getEpsilon',function(request, response){
    console.log("hit getEpsilon endpoint");
    response.send(epsilon);
});

//var server = app.listen(3000, function(){
var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('listening on address: ' + port);
});

module.export=app;