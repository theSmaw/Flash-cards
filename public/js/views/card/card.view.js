define([
    'views/image/image.view',
    'views/word/word.view'
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

            el : '<li class="card"></li>',

            initialize : function () {
                _.bindAll(this);
            },

            render : function () {
                this.appendWord();
                this.appendImage();
                this.$el.css('display', 'block');

                return this;
            }
        });

    return CardView;
});