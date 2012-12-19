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
        url : 'http://farm1.staticflickr.com/28/96101425_fd3ed49773_b.jpg'
    });
    var card2 = new Card({
        word : 'tree',
        url : 'http://farm1.staticflickr.com/28/96101425_fd3ed49773_b.jpg'
    });

    var cards = new Cards([card1, card2]);
    
    return cards; 
});
