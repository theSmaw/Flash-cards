define([
    'views/cards/cards.view.js'
], function (CardsView) {
    var ApplicationView = Backbone.View.extend({
        
        addCardToPage : function(cardModel) {
            this.cardsView.addCardToPage(cardModel);
        },
        
        cardViews : {},
        
        contentCache : null,
    
        el : $('#app'),
    
        initialize : function () {
            _.bindAll(this);
            this.render();
        },
        
        render : function () {
            this.cardsView = new CardsView();
            this.$el.append(this.cardsView.render().el);
        },
        
        showCard : function (word) {
            alert(word);
        }
    });
    
    return ApplicationView;
});