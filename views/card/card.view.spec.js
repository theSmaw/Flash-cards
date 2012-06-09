require([
    'libs/isolate!views/card/card.view.js'
], function (CardView) {
    
    describe('CardView', function () {
        
        beforeEach(function () {
            CardView.dependencies['views/word/word.view.js'].prototype = {
                
                render : function () {
                    
                    return {
                        el : document.createElement('h2')
                    };
                }    
            };
            CardView.dependencies['views/image/image.view.js'].prototype = {
                
                render : function () {
                    
                    return {
                        el : document.createElement('img')
                    };
                }    
            };
            this.Card = Backbone.Model.extend({
                defaults : {
                    url : 'http://card/view/spec',
                    word : 'CardViewSpec'
                }
            });
        });
   
        describe('CardView.initialize', function () {

            it('should be a method', function () {
                var cardView = new CardView();

                expect(typeof(cardView.initialize)).toBe('function');
            });
        });
         
        describe('CardView.render', function () {
            
            it('should be a method', function() {
                var cardView = new CardView();
                
                expect(typeof(cardView.render)).toBe('function');
            });
            
            it('should return an object', function() {
                var cardView = new CardView({
                        model : {
                            get : function() {
                                
                            }
                        }
                    }),
                    renderedView = cardView.render();
                
                expect(typeof(renderedView)).toBe('object');
            });
            
            it('should return a rendered view with an el property of li', function() {
                var cardView = new CardView({
                        model : new this.Card()
                    }),
                    renderedView = cardView.render();

                expect(renderedView.el.nodeName.toLowerCase()).toBe('li');
            });
            
            it('should return an object with an $el property containing the expected markup', function() {
                var cardView = new CardView({
                        model : new this.Card()
                    }),
                    renderedView = cardView.render();
               
                expect(renderedView.$el.html()).toBe('<h2></h2><img>');
            });
        });
    });
});