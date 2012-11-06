define([
    'models/card/card.model'
], function (Card) {
    var Cards = Backbone.Collection.extend({
            model : Card,
            url : 'http://localhost:3000/cards'
        });

    return Cards;
});
