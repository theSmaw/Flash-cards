var database = require('database');

var CardModel = database.getCardModel();

function index (req, res){
    if (database.isBroken()) {
        console.log('database is broken');
        
        return res.send({
            error : 'database'
        });
    } else {
        console.log('database ok');
        
        return CardModel.find({}, null, {
            sort : {
                'word' : 1
            }
        }, function(err, cards) {
            if (err) {
                console.log('error', err);
            } else {
                console.log('returning cards', cards);
            }
            
            return res.send(cards);
        });
    }
}

function word (req, res) {

    return CardModel.findByWord(req.params.word, function(err, card) {
        if (!err) {

            return res.send(card);
        }
    });
}

exports.start = function (app) {
    app.get('/cards', index);
    app.get('/api/cards/:word');
};
