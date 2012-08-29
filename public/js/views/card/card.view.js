define([
    'views/image/image.view',
    'views/word/word.view'
], function (ImageView, WordView) {
    var CardView = Backbone.View.extend({

            appendImage : function () {
                this.imageView = new ImageView({
                    model : this.model
                });
                this.$el.append(this.imageView.el);
            },

            appendWord : function () {
                this.wordView = new WordView({
                    model : this.model
                });
                this.$el.append(this.wordView.el);
            },

            el : '<li class="card"></li>',

            events : {
                'wordClicked' : 'showImage'
            },

            hide : function () {
                this.$el.css({
                    zIndex : 1
                });
            },

            initialize : function () {
                _.bindAll(this);
                this.render();
            },

            render : function () {
                this.appendWord();
                this.appendImage();

                return this;
            },

            show : function () {
                this.wordView.show();
                this.$el.css({
                    zIndex : 2
                });
            },

            showImage : function () {
                console.log('si');
                this.wordView.hide();
                this.imageView.show();
            }
        });

    return CardView;
});