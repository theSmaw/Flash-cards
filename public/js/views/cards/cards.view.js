define([
    'collections/cards/cards.collection',
    'views/card/card.view'
], function (CardsCollection, CardView) {
    var CardsView = Backbone.View.extend({

        addCard : function (model) {
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
        },

        cardViews : {},

        contentCache : null,

        createCardRoute : function (cardModel) {
            if (this.firstCard === true) {
                this.firstCard = false;
                this.routerData.routes[''] = cardModel.get('word');
            }
            this.routerData.routes[cardModel.get('word')] = cardModel.get('word');

            this.routerData[cardModel.get('word')] = _.bind(function () {
                this.showCard(cardModel.get('word'));
            }, this);
        },

        el : '<ul id="cards"></ul>',

        firstCard : true,

        getCards : function () {
            this.cards.bind('reset', _.bind(this.start, this));
            this.cards.fetch();
        },

        initialize : function () {
            _.bindAll(this);
            this.firstCard = true;
            this.cards = new CardsCollection();
            this.getCards();
        },

        routerData : {
            routes : {}
        },

        showCard : function (word) {
            this.cardViews[word].show();
        },

        start : function () {
            var CardsRouter;

            this.addCards();
            CardsRouter = Backbone.Router.extend(this.routerData);
            this.cardsRouter = new CardsRouter();

            // try allows this to be run multiple times in tests
            try {
                Backbone.history.start();
            } catch (e) {}
        }
    });

    return CardsView;
});
