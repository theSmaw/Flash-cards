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
    });
});