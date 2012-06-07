define([
    'libs/isolate!views/cards/cards.view.js'
], function (CardsView) {
    
    beforeEach(function () {
        CardsView.dependencies['views/card/card.view.js'].prototype = {
            
            render : function () {
                
                return {
                    el : document.createElement('div')
                };
            }
        };
    });

    describe('CardsView', function () {
    
        describe('CardsView.initialize', function () {

            it('should be a method', function () {
                var cardsView = new CardsView();

                expect(typeof(cardsView.initialize)).toBe('function');
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