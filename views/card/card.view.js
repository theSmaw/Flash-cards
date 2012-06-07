define([
    'views/image/image.view.js',
    'views/word/word.view.js'
], function (ImageView, WordView) {
    var CardView = Backbone.View.extend({
        
            appendImage : function () {
                var imageView = new ImageView({
                    model : this.model
                });
                
                this.$el.append(imageView.render().el);
            },
        
            appendWord : function () {
                var wordView = new WordView({
                    model : this.model
                });
                
                this.$el.append(wordView.render().el);
            },
    
            initialize : function () {
                _.bindAll(this);
            },
    
            render : function () {
                this.appendWord();
                this.appendImage();
           
                return this;
            },
    
            tagName : 'li'
        });
    
    return CardView;
});