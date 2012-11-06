define([
    'collections/cards/cards.collection',
    'views/card/card.view'
], function (CardsCollection, CardView) {
    var CardsView = Backbone.View.extend({

        addCard : function (model) {
            this.cardsOrder.push(model);
            this.addCardToPage(model);
            this.createCardRoute(model);
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

        contentCache : null,

        createCardRoute : function (cardModel) {
            if (this.firstCard === true) {
                this.firstCard = false;
                this.routerData.routes[''] = cardModel.get('word');
            }
            this.routerData.routes[cardModel.get('word')] = cardModel.get('word');

            this.routerData[cardModel.get('word')] = _.bind(function () {
                this.showCard(this.cardsOrder[this.currentCard].get('word'));
            }, this);
        },

        currentCard : 0,

        el : '<ul id="cards"></ul>',

        firstCard : true,

        getCards : function () {
            this.cards.bind('reset', _.bind(this.render, this));
            this.cards.fetch();
        },

        initialize : function () {
            this.firstCard = true;
            this.cards = new CardsCollection();
            this.getCards();
        },

        progress : function () {
            this.currentCard += 1;
            if (this.currentCard === this.cardsOrder.length) {
                this.currentCard = 0;
            }
            this.cardsRouter.navigate(this.cardsOrder[this.currentCard].get('word'), {
                trigger : true
            });
        },

        render : function () {
            var CardsRouter;

            this.addCards();
            CardsRouter = Backbone.Router.extend(this.routerData);
            this.cardsRouter = new CardsRouter();

            // try allows this to be run multiple times in tests
            try {
                Backbone.history.start();
            } catch (e) {}
        },

        routerData : {
            routes : {}
        },

        showCard : function (word) {
            this.cardViews[word].show();
        }
    });

    return CardsView;
});
