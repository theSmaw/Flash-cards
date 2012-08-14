define([
    'views/cards/cards.view'
], function (CardsView) {
    var ApplicationView = Backbone.View.extend({

        el : $('#app'),

        initialize : function () {
            _.bindAll(this);
            this.cardsView = new CardsView();
            this.cardsView.cards.bind('reset', this.render);
        },

        render : function () {
            this.$el.html(this.cardsView.render().el);
        }
    });

    return ApplicationView;
});