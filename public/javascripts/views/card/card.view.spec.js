require([
    'libs/isolate!views/card/card.view'
], function (CardView) {
    var cardModel = Backbone.Model.extend({
            defaults : {
                url : 'http://card/view/spec',
                word : 'CardViewSpec'
            }
        }),
        cardView;

    CardView.dependencies['views/word/word.view'].prototype = {
        el : document.createElement('h2'),

        on : function () {}
    };
    CardView.dependencies['views/image/image.view'].prototype = {
        el : document.createElement('img'),

        on : function () {}
    };

    function after () {
        cardView.off();
        cardView.remove();
    }

    function before () {
        cardView = new CardView({
            model : new cardModel()
        });
    }


    describe('CardView', function () {
        beforeEach(before);
        afterEach(after);

        describe('CardView.initialize', function () {

            it('should be a method', function () {
                expect(typeof(cardView.initialize)).toBe('function');
            });
        });

        describe('CardView.render', function () {
            var renderedCardView;

            beforeEach(function () {
                before();
                renderedCardView = cardView.render();
            });

            afterEach(after);

            it('should be a method', function () {
                expect(typeof(cardView.render)).toBe('function');
            });

            it('should return an object', function () {
                expect(typeof(renderedCardView)).toBe('object');
            });

            it('should return a rendered view with an el property of li', function () {
                expect(renderedCardView.el.nodeName.toLowerCase()).toBe('li');
            });

            it('should return an object with an $el property containing the expected markup', function () {
                expect(renderedCardView.$el.html()).toBe('<h2></h2><img>');
            });
        });
    });
});
