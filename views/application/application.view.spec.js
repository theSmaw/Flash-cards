define([
    'libs/isolate!views/application/application.view.js'
], function (ApplicationView) {
    
    beforeEach(function () {
        ApplicationView.dependencies['views/cards/cards.view.js'].prototype = {
            
            addCardToPage : function () {},
            
            render : function () {
                
                return {
                    el : document.createElement('ul')
                };
            }
        };
    });

    describe('ApplicationView', function () {
    
        describe('ApplicationView.initialize', function () {

            it('should be a method', function () {
                var applicationView = new ApplicationView();

                expect(typeof(applicationView.initialize)).toBe('function');
            });
        });
        
        describe('ApplicationView.addCardToPage', function () {
            
            it('should be a method', function () {
                var applicationView = new ApplicationView();

                expect(typeof(applicationView.addCardToPage)).toBe('function');
            });
            
            it('should add a cards view', function () {
                var applicationView = new ApplicationView();
                
                spyOn(applicationView.cardsView, 'addCardToPage');
                applicationView.addCardToPage();
                expect(applicationView.cardsView.addCardToPage).toHaveBeenCalled();
            });
        });
        
        describe('ApplicationView.showCard', function () {
            
            it('should be a method', function () {
                var applicationView = new ApplicationView();

                expect(typeof(applicationView.showCard)).toBe('function');
            });
        });
    });
});