define([
    'libs/isolate!views/application/application.view.js'
], function (ApplicationView) {
    var applicationView;

    function before() {
        ApplicationView.dependencies['views/cards/cards.view.js'].prototype = {

            addCardToPage : function () {},

            cards : {

                bind : function () {}
            },

            render : function () {

                return {
                    el : document.createElement('ul')
                };
            }
        };
        applicationView = new ApplicationView();
    }

    function after() {
        applicationView.off();
        applicationView.remove();
    }

    describe('ApplicationView', function () {

        describe('ApplicationView.initialize', function () {

            beforeEach(function () {
                before();
            });

            afterEach(function () {
                after();
            });

            it('should be a method', function () {
                expect(typeof(applicationView.initialize)).toBe('function');
            });
        });
    });
});