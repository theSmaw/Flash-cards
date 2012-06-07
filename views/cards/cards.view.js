define([
    'collections/cards/cards.collection.js',
    'views/card/card.view.js'
], function (CardsCollection, CardView) {
    var CardsView = Backbone.View.extend({
        
        addCardToPage : function(cardModel) {
            var cardHtml,
                cardView;
                
            cardView = new CardView({
                model : cardModel
            });
            cardHtml = cardView.render().el;
            this.cardViews[cardModel.get('word')] = cardView;
            this.$el.append(cardHtml);
        },
        
        cardViews : {},
        
        contentCache : null,
    
        initialize : function () {
            _.bindAll(this);
        },
        
        showCard : function (word) {
            alert(word);
        },
        
        tagName : 'ul'
    });
    
    return CardsView;
});