define([
    'libs/isolate!views/ApplicationView.js'
], function (ApplicationView) {
    
    beforeEach(function () {
        
        ApplicationView.dependencies['collections/Cards.js'].prototype = {
            
            bind : function () {},
        
            fetch : function () {}
        };
    });

    describe('ApplicationView', function () {
    
        describe('ApplicationView.initialize', function () {

            it('should be a method', function() {
                var applicationView = new ApplicationView();

                expect(typeof(applicationView.initialize)).toBe('function');
            });
        });
    });
});