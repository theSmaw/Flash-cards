define([
    'libs/isolate!main.js'
], function (Main) {
    
    beforeEach(function () {
        Main.dependencies['collections/cards/cards.collection.js'].prototype = {
            
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
        Main.dependencies['views/application/application.view.js'].prototype = {
            
            addCardToPage : function () {},
            
            initialize : function () {},
            
            showCard : function () {}
        };
    });

    describe('Main', function () {

        it('should have an applicationView', function () {
            var main = new Main();

            expect(typeof(main.applicationView.initialize)).toBe('function');
        });
        
        it('should get the cards from the server', function () {
            var main = new Main();

            expect(typeof(main.cards)).toBe('object');
            expect(typeof(main.cards.models)).toBe('object');
        });
        
        it('should add each card to the applicationView', function () {
            var main = new Main();
            
            spyOn(main.applicationView, 'addCardToPage');
            main.start();
            expect(main.applicationView.addCardToPage).toHaveBeenCalled();
        });
        
        it('should create a route for each card', function () {
            var main = new Main();
            
            main.start();
            expect(typeof(main.routerData.routes)).toBe('object');
            expect(main.routerData.routes['word01']).toBe('word01');
            expect(typeof(main.routerData['word01'])).toBe('function');
            expect(main.routerData.routes['word02']).toBe('word02');
            expect(typeof(main.routerData['word02'])).toBe('function');
        });
        
        it('should create a route for each card that shows the card', function () {
            var main = new Main();
            
            main.start();
            spyOn(main.applicationView, 'showCard');
            main.routerData['word01']();
            expect(main.applicationView.showCard).toHaveBeenCalled();
            expect(main.applicationView.showCard).toHaveBeenCalledWith('word01');
            main.routerData['word02']();
            expect(main.applicationView.showCard).toHaveBeenCalled();
            expect(main.applicationView.showCard).toHaveBeenCalledWith('word02');
        });
    });
});