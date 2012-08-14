require([
    'libs/isolate!word.view.js'
], function (WordView) {

    describe('WordView', function () {

        beforeEach(function () {
            WordView.dependencies['libs/text!templates/word/word.template.html'] = '<img src="<%= url %>" />'
            this.Card = Backbone.Model.extend({
                defaults : {
                    url : 'http://word/view/spec',
                    word : 'WordViewSpec'
                }
            });
        });

        describe('WordView.initialize', function () {

            it('should be a method', function () {
                var wordView = new WordView();

                expect(typeof(wordView.initialize)).toBe('function');
            });
        });

        describe('WordView.render', function () {

            it('should be a method', function() {
                var wordView = new WordView;

                expect(typeof(wordView.render)).toBe('function');
            });

            it('should return an object', function() {
                var wordView = new WordView({
                        model : {
                            get : function() {

                            }
                        }
                    }),
                    renderedView = wordView.render();

                expect(typeof(renderedView)).toBe('object');
            });

            it('should return a rendered view with an el property of div', function() {
                var wordView = new WordView({
                        model : new this.Card()
                    }),
                    renderedView = wordView.render();

                expect(renderedView.el.nodeName.toLowerCase()).toBe('div');
            });

            it('should return an object with an $el property containing the expected markup', function() {
                var wordView = new WordView({
                        model : new this.Card()
                    }),
                    renderedView = wordView.render();

                expect(renderedView.$el.html()).toBe('<h2>WordViewSpec</h2>');
            });
        });
    });
});