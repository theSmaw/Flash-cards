define([
    'libs/isolate!main.js'
], function (Main) {
    
    beforeEach(function () {
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
    });
});