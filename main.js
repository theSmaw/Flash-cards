define([
    'collections/cards/cards.collection.js',
    'views/application/application.view.js',
    'views/card/card.view.js'
], function (CardsCollection, ApplicationView, CardView) {
    
    function Main() {
        this.applicationView = new ApplicationView();
        this.firstCard = true;
        this.routerData = {
            routes : {}
        };
        this.getCards();
    }

    Main.prototype.createCardRoute = function (cardModel) {
        if (this.firstCard === true) {
            this.firstCard = false;
            this.routerData.routes[''] = cardModel.get('word');
        }
        this.routerData.routes[cardModel.get('word')] = cardModel.get('word');
        
        this.routerData[cardModel.get('word')] = _.bind(function () {
            this.applicationView.showCard(cardModel.get('word'));
        }, this);
    };
    
    Main.prototype.addCards = function () {
        
        _(this.cards.models).each(_.bind(function (model) {
            this.applicationView.addCardToPage(model);
            this.createCardRoute(model);
        }, this));
    };
    
    Main.prototype.start = function () {
        var ApplicationRouter;
        
        this.addCards();
        ApplicationRouter = Backbone.Router.extend(this.routerData);
        this.applicationRouter = new ApplicationRouter();
            
        // try allows this to be run multiple times in tests
        try {
            Backbone.history.start();
        } catch (e) {}
    };
        
    Main.prototype.getCards = function () {
        this.cards = new CardsCollection();
        this.cards.bind('reset', _.bind(this.start, this));
        this.cards.fetch();
    };
    
    return Main;
});