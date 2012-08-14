/*function Database(url, collections) {
    this.url = url;// "username:password@example.com/mydb"
    this.collections = collections;
}

Database.prototype.connect = function () {
    this.database = require('mongojs').connect(this.url, this.collections);
};

Database.prototype.findCards = function () {
    this.database.cards.find({}, function (err, cards) {
        if (err || !cards) {
            console.log(err);
        } else {

            cards.forEach(function (card) {
                console.log(card);
            });
        }
    });
};

var database = new Database('localhost:27017/flashcards', ['cards']);

database.connect();
database.findCards();
*/



var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express.createServer();

mongoose.connect('mongodb://localhost:27017/flashcards');

var Card = mongoose.model('card', new mongoose.Schema({
    word : String,
    url : String
}));
console.log(application_root);
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, 'public')));
    app.use(express.errorHandler({
        dumpExceptions : true,
        showStack : true
    }));
});

app.use(express.static(__dirname + '/'));

app.get('/card', function(req, res){
    res.render('card', {
        title : 'MongoDB Backed Flashcards App'
    });
});

app.get('/api/cards', function(req, res){

    return Card.find({}, null, {
        sort : {
            'word' : 1
        }
    }, function(err, cards) {

        return res.send(cards);
    });
});

app.get('/api/cards/:word', function(req, res){

    return Card.findByWord(req.params.word, function(err, card) {
        if (!err) {

            return res.send(card);
        }
    });
});

app.listen(3000);