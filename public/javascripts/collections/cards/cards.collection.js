define([
    'models/card/card.model'
], function (Card) {
    var Cards = Backbone.Collection.extend({
            model : Card,
            url : '/cards'
        });

    return Cards;
});
