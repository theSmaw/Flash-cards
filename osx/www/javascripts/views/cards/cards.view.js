define([
    'collections/cards/cards.collection',
    'views/card/card.view'
], function (CardsCollection, CardView) {
    var CardsView = Backbone.View.extend({

        addCard : function (model) {
            this.cardsOrder.push(model);
            this.addCardToPage(model);
        },

        addCards : function () {
            _(this.cards.models).each(_.bind(function (model) {
                this.addCard(model);
            }, this));
        },

        addCardToPage : function(cardModel) {
            var cardView;

            cardView = new CardView({
                model : cardModel
            });
            this.cardViews[cardModel.get('word')] = cardView;
            this.$el.append(cardView.el);

            cardView.on('progress', _.bind(this.progress, this));
        },

        cardsOrder : [],

        cardViews : {},

        currentCard : 0,

        el : '<ul id="cards"></ul>',

        firstCard : true,

        hideCard : function (word) {
            this.cardViews[word].hide();
        },

        initialize : function () {
            this.firstCard = true;
            this.cards = CardsCollection;
            this.addCards();
        },

        progress : function () {
            this.hideCard(this.cardsOrder[this.currentCard].get('word'));
            this.currentCard += 1;
            if (this.currentCard === this.cardsOrder.length) {
                this.currentCard = 0;
            }
            this.showCard(this.cardsOrder[this.currentCard].get('word'));
        },

        render : function () {
            this.showCard(this.cardsOrder[this.currentCard].get('word'));
        },

        showCard : function (word) {
            this.cardViews[word].show();
        }
    });

    return CardsView;
});
