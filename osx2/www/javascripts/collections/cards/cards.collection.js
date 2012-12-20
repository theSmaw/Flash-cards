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
        word : 'cat',
        url : 'http://farm2.staticflickr.com/1404/5110833180_971bfb3b4f_b.jpg'
    });

    var card3 = new Card({
        word : 'dog',
        url : 'http://farm4.staticflickr.com/3052/3086132328_e2041be795_b.jpg'
    });

    var card4 = new Card({
        word : 'owl',
        url : 'http://farm7.staticflickr.com/6005/5927758528_a2060423e7_b.jpg'
    });

    var cards = new Cards([card1, card2, card3, card4]);
    
    return cards; 
});
