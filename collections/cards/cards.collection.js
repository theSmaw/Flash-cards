define([
    'models/card/card.model.js'
], function (Card) {
    var Cards = Backbone.Collection.extend({
            model : Card,
            url : 'http://localhost:3000/api/cards/'
        });
    
    return Cards;
});
