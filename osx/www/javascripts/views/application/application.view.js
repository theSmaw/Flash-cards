define([
    'views/cards/cards.view'
], function (CardsView) {
    var ApplicationView = function () {
            this.$el = $('#app');
            this.enableFastClick();
            this.cardsView = new CardsView();
        };

    ApplicationView.prototype = {

        enableFastClick : function () {
            var el = this.$el.get(0);
            
            window.addEventListener('load', function () {
                new FastClick(el);
            }, false);
        },

        render : function () {
            this.$el.html(this.cardsView.$el);
            this.cardsView.render();
        }
    };

    return ApplicationView;
});
