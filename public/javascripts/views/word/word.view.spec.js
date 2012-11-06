require([
    'libs/isolate!views/word/word.view'
], function (WordView) {

    describe('WordView', function () {
        var cardModel = Backbone.Model.extend({
                defaults : {
                    url : 'http://word/view/spec',
                    word : 'WordViewSpec'
                }
            }),
            wordView;

        function after () {
            wordView.off();
            wordView.remove();
        }

        function before () {
            wordView = new WordView({
                model : new cardModel()
            });
        }

        describe('WordView.initialize', function () {
            beforeEach(before);
            afterEach(after);

            it('should be a method', function () {
                expect(typeof(wordView.initialize)).toBe('function');
            });
        });

        describe('WordView.render', function () {
            var renderedWordView;

            beforeEach(function () {
                before();
                renderedWordView = wordView.render();
            });

            afterEach(after);

            it('should be a method', function() {
                expect(typeof(wordView.render)).toBe('function');
            });

            it('should return an object', function() {
                expect(typeof(renderedWordView)).toBe('object');
            });

            it('should return a rendered view with an el property of div', function() {
                expect(renderedWordView.el.nodeName.toLowerCase()).toBe('div');
            });

            it('should return an object with an $el property containing the expected markup', function() {
                expect(renderedWordView.$el.html()).toBe('<h2>WordViewSpec</h2>');
            });
        });
    });
});
