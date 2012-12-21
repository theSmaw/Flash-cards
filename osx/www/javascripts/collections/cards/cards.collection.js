define([
    'models/card/card.model'
], function (Card) {
    var Cards = Backbone.Collection.extend({
            model : Card,
        
            // iphone needs the full path
            url : 'http://localhost:3001/cards'
        
        // url : '/cards'
        });
    
    var card1 = new Card({
        word : 'bee', 
        url : 'images/bee.jpg'
    });
    
    var card2 = new Card({
        word : 'cat',
        url : 'images/cat.jpg'
    });

    var card3 = new Card({
        word : 'dog',
        url : 'images/dog.jpg'
    });

    var card4 = new Card({
        word : 'owl',
        url : 'images/owl.jpg'
    });

    var cards = new Cards([card1, card2, card3, card4]);
    
    return cards; 
});
