define([
    '../../views/cards/cards.view.js'
], function (CardsView) {
    var ApplicationView = Backbone.View.extend({

        el : $('#app'),

        initialize : function () {
            _.bindAll(this);
            this.cardsView = new CardsView();
            this.cards.bind('reset', this.render);
        },

        render : function () {
            this.$el.html(this.cardsView.render().el);
        }
    });

    return ApplicationView;
});