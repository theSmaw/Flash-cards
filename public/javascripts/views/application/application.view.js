define([
    'views/cards/cards.view'
], function (CardsView) {
    var ApplicationView = Backbone.View.extend({

        el : $('#app'),

        initialize : function () {
            this.cardsView = new CardsView();
        },

        render : function () {
            this.$el.html(this.cardsView.el);
            this.cardsView.render();
        }
    });

    return ApplicationView;
});
