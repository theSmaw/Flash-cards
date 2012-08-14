define([
    'libs/isolate!views/image/image.view'
], function (ImageView) {

    describe('ImageView', function () {

        beforeEach(function () {
            this.Card = Backbone.Model.extend({
                defaults : {
                    url : 'http://image/view/spec',
                    word : 'ImageViewSpec'
                }
            });
        });

        describe('ImageView.initialize', function () {

            it('should be a method', function () {
                var imageView = new ImageView();

                expect(typeof(imageView.initialize)).toBe('function');
            });
        });

        describe('ImageView.render', function () {

            it('should be a method', function() {
                var imageView = new ImageView;

                expect(typeof(imageView.render)).toBe('function');
            });

            it('should return an object', function() {
                var imageView = new ImageView({
                        model : {
                            get : function() {

                            }
                        }
                    }),
                    renderedView = imageView.render();

                expect(typeof(renderedView)).toBe('object');
            });

            it('should return a rendered view with an el property of div', function() {
                var imageView = new ImageView({
                        model : new this.Card()
                    }),
                    renderedView = imageView.render();

                expect(renderedView.el.nodeName.toLowerCase()).toBe('div');
            });

            it('should return an object with an $el property containing the expected markup', function() {
                var imageView = new ImageView({
                        model : new this.Card()
                    }),
                    renderedView = imageView.render();

                expect(renderedView.$el.html()).toBe('<img src="http://image/view/spec">');
            });
        });
    });
});