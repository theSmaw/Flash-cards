define([
    'libs/isolate!views/cards/cards.view.js'
], function (CardsView) {
    
    beforeEach(function () {
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
    });

    describe('CardsView', function () {
    
        describe('CardsView.initialize', function () {

            it('should be a method', function () {
                var cardsView = new CardsView();

                expect(typeof(cardsView.initialize)).toBe('function');
            });
        
            it('should get the cards from the server', function () {
                var cardsView = new CardsView();
    
                expect(typeof(cardsView.cards)).toBe('object');
                expect(typeof(cardsView.cards.models)).toBe('object');
            });
            
            it('should create a route for each card', function () {
                var cardsView = new CardsView();
                
                cardsView.start();
                expect(typeof(cardsView.routerData.routes)).toBe('object');
                expect(cardsView.routerData.routes['word01']).toBe('word01');
                expect(typeof(cardsView.routerData['word01'])).toBe('function');
                expect(cardsView.routerData.routes['word02']).toBe('word02');
                expect(typeof(cardsView.routerData['word02'])).toBe('function');
            });
            
            it('should create a route for each card that shows the card', function () {
                var cardsView = new CardsView();
                
                cardsView.start();
                spyOn(cardsView.cardViews['word01'], 'show');
                cardsView.routerData['word01']();
                expect(cardsView.cardViews['word01'].show).toHaveBeenCalled();
                expect(cardsView.cardViews['word01'].show).toHaveBeenCalledWith('word01');
                cardsView.routerData['word02']();
                expect(cardsView.cardViews['word01'].show).toHaveBeenCalled();
                expect(cardsView.cardViews['word01'].show).toHaveBeenCalledWith('word02');
            });
        });
        
        describe('CardsView.addCardToPage', function () {
            
            it('should be a method', function () {
                var cardsView = new CardsView();

                expect(typeof(cardsView.addCardToPage)).toBe('function');
            });
            
            it('should add a card view', function () {
                var cardsView = new CardsView();
                
                cardsView.$el = $('<ul></ul>')
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
            
            it('should be a method', function () {
                var cardsView = new CardsView();

                expect(typeof(cardsView.showCard)).toBe('function');
            });
        });
    });
});