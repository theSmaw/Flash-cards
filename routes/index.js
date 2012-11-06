var cards = require('./cards.js');


function index (req, res){
  res.render('index', {
      title : 'Flash cards'
  });
}

function cards (req, res){
    res.send({
        title : 'Flash cards'
    });
}

exports.start = function (app) {
    app.get('/', index);
    cards.start(app);
};
