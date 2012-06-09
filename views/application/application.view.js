define([
    'views/cards/cards.view.js'
], function (CardsView) {
    var ApplicationView = Backbone.View.extend({
    
        el : $('#app'),
    
        initialize : function () {
            _.bindAll(this);
            this.render();
        },
        
        render : function () {
            this.cardsView = new CardsView();
            this.$el.append(this.cardsView.render().el);
        }
    });
    
    return ApplicationView;
});