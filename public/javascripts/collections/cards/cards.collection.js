define([
    'models/card/card.model'
], function (Card) {
    var Cards = Backbone.Collection.extend({
            model : Card,
        
            // iphone needs the full path
            url : 'http://localhost:3001/cards'
        
        // url : '/cards'
        });

    return Cards;
});
