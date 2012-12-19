
/*
// img width 1024
db.cards.insert({})

 use cards
 db.cards.save({word : 'bee', url : 'http://farm1.staticflickr.com/28/96101425_fd3ed49773_b.jpg'})
 db.cards.save({word : 'cat', url : 'http://farm2.staticflickr.com/1404/5110833180_971bfb3b4f_b.jpg'})
 db.cards.save({word : 'dog', url : 'http://farm4.staticflickr.com/3052/3086132328_e2041be795_b.jpg'})
 db.cards.save({word : 'owl', url : 'http://farm7.staticflickr.com/6005/5927758528_a2060423e7_b.jpg'})

 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.configure(function(){
  app.set('port', process.env.PORT || 3001);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
 // app.use(allowCrossDomain)
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

routes.start(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
