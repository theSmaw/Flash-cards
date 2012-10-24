/*function Database(url, collections) {
    this.url = url;// "username:password@example.com/mydb"
    this.collections = collections;
}//

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

/*
use cards
db.cards.save({word : 'tree', url : 'http://farm7.staticflickr.com/6016/5949819558_47a5117548_b.jpg'})
db.cards.save({word : 'house', url : 'http://farm5.staticflickr.com/4154/5007151269_3aea1aea24_z.jpg'})
db.cards.save({word : 'flower', url : 'http://farm9.staticflickr.com/8424/7787351250_03c4ed4ecc_b.jpg'})
 */



var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    database = require('database');

var app = express.createServer();




var CardModel = database.getCardModel();

app.configure(function () {
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


app.get('/api/cards', function(req, res) {
    if (database.isBroken()) {

        return res.send({
            error : 'database'
        });
    } else {

        return CardModel.find({}, null, {
            sort : {
                'word' : 1
            }
        }, function(err, cards) {

            return res.send(cards);
        });
    }
});

app.get('/api/cards/:word', function(req, res){

    return CardModel.findByWord(req.params.word, function(err, card) {
        if (!err) {

            return res.send(card);
        }
    });
});

app.listen(3000);
