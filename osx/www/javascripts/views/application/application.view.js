define([
    'views/cards/cards.view'
], function (CardsView) {
    var ApplicationView = Backbone.View.extend({
        
        bindFastClick : function () {
            new FastClick(this.el);
        },

        el : '#app',
        
        enableFastClick : function () {
            var el = this.el;
            
            window.addEventListener('load', _.bind(this.bindFastClick, this), false);
        },

        initialize : function () {
            this.enableFastClick();
            this.cardsView = new CardsView();
        },

        render : function () {
            this.$el.html(this.cardsView.el);
            this.cardsView.render();
        }
    });

    return ApplicationView;
});
