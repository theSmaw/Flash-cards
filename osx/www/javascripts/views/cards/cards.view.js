define([
    'collections/cards/cards.collection',
    'views/card/card.view'
], function (CardsCollection, CardView) {
    var CardsView = function () {
            this.$el = $('<ul id="cards"></ul>');
            this.cardViews = [];
            this.currentCard = 0;
            this.firstCard = true;
            this.cards = CardsCollection;
            this.addCards();
        };
    
    CardsView.prototype = {

        addCards : function () {
            var card;
            
            for (card in this.cards) {
                if(this.cards.hasOwnProperty(card)) {
                    this.addCard(this.cards[card]);
                }
            }
        },

        addCard : function(card) {
            var cardView = new CardView(card);
            
            this.cardViews.push(cardView);
            this.$el.append(cardView.$el);
            cardView.render();
            cardView.$el.on('cardComplete', _.bind(this.progress, this));
        },

        hideCard : function () {
            this.cardViews[this.currentCard].hide();
        },

        progress : function () {
            this.hideCard();
            this.currentCard += 1;
            if (this.currentCard === this.cardViews.length) {
                this.currentCard = 0;
            }
            this.showCard();
        },

        render : function () {
            this.showCard();
        },

        showCard : function () {
            this.cardViews[this.currentCard].show();
        }
    };

    return CardsView;
});
