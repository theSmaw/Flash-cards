define([
    'libs/isolate!views/cards/cards.view.js'
], function (CardsView) {
    var cardsView;

    function before() {
        CardsView.dependencies['collections/cards/cards.collection.js'].prototype = {

            bind : function () {},

            fetch : function () {
                this.models = [{
                    get : function (property) {

                        return this[property];
                    },
                    url : 'http://url01',
                    word : 'word01'
                }, {
                    get : function (property) {

                        return this[property];
                    },
                    url : 'http://url02',
                    word : 'word02'
                }];
            }
        };
        CardsView.dependencies['views/card/card.view.js'].prototype = {

            render : function () {

                return {
                    el : document.createElement('div')
                };
            },

            show : function () {}
        };
        cardsView = new CardsView();
    }

    function after() {
        cardsView.off();
        cardsView.remove();
    }

    describe('CardsView', function () {

        describe('CardsView.initialize', function () {

            beforeEach(function () {
                before();
            });

            afterEach(function () {
                after();
            });

            it('should be a method', function () {
                expect(typeof(cardsView.initialize)).toBe('function');
            });

            it('should get the cards from the server', function () {
                expect(typeof(cardsView.cards)).toBe('object');
                expect(typeof(cardsView.cards.models)).toBe('object');
            });

            it('should create a route for each card', function () {
                cardsView.start();
                expect(typeof(cardsView.routerData.routes)).toBe('object');
                expect(cardsView.routerData.routes['word01']).toBe('word01');
                expect(typeof(cardsView.routerData['word01'])).toBe('function');
                expect(cardsView.routerData.routes['word02']).toBe('word02');
                expect(typeof(cardsView.routerData['word02'])).toBe('function');
            });

            it('should create a route for each card that shows the card', function () {
                cardsView.start();
                spyOn(cardsView.cardViews['word01'], 'show');
                cardsView.routerData['word01']();
                expect(cardsView.cardViews['word01'].show).toHaveBeenCalled();
                cardsView.routerData['word02']();
                expect(cardsView.cardViews['word01'].show).toHaveBeenCalled();
            });
        });

        describe('CardsView.addCardToPage', function () {

            beforeEach(function () {
                before();
            });

            afterEach(function () {
                after();
            });

            it('should be a method', function () {
                expect(typeof(cardsView.addCardToPage)).toBe('function');
            });

            it('should add a card view', function () {
                cardsView.$el = $('<ul></ul>');
                cardsView.addCardToPage({

                    get : function (property) {

                        return this[property];
                    },

                    url : 'http://url01',
                    word : 'word01'
                });
                expect(typeof(cardsView.cardViews)).toBe('object');
                expect(typeof(cardsView.cardViews['word01'].render)).toBe('function');
                expect(cardsView.$el.html()).toBe('<div></div>');
            });
        });

        describe('CardsView.showCard', function () {

            beforeEach(function () {
                before();
            });

            afterEach(function () {
                after();
            });

            it('should be a method', function () {
                expect(typeof(cardsView.showCard)).toBe('function');
            });
        });
    });
});