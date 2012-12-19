define([
    'libs/isolate!views/image/image.view'
], function (ImageView) {
    var cardModel = Backbone.Model.extend({
            defaults : {
                url : 'http://image/view/spec',
                word : 'ImageViewSpec'
            }
        }),
        imageView;

    function after () {
        imageView.off();
        imageView.remove();
    }

    function before () {
        imageView = new ImageView({
            model : new cardModel()
        });
    }

    describe('ImageView', function () {
        beforeEach(before);
        afterEach(after);

        describe('ImageView.initialize', function () {

            it('should be a method', function () {
                expect(typeof(imageView.initialize)).toBe('function');
            });
        });

        describe('ImageView.render', function () {
            var renderedImageView;

            beforeEach(function () {
                before();
                renderedImageView = imageView.render();
            });

            afterEach(after);

            it('should be a method', function() {
                expect(typeof(imageView.render)).toBe('function');
            });

            it('should return an object', function() {
                expect(typeof(renderedImageView)).toBe('object');
            });

            it('should return a rendered view with an el property of div', function() {
                expect(renderedImageView.el.nodeName.toLowerCase()).toBe('div');
            });

            it('should return an object with an $el property containing the expected markup', function() {
                expect(renderedImageView.$el.html()).toBe('<img src="http://image/view/spec">');
            });
        });
    });
});
