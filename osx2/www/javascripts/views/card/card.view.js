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

            cardComplete : function () {
                this.trigger('progress');
            },

            el : '<li class="card"></li>',

            hide : function () {
                this.$el.css({
                    zIndex : 1
                });
            },

            initialize : function () {
                _.bindAll(this);
                this.render();
            },

            observeSubViewEvents : function () {
                this.imageView.on('progress', this.cardComplete);
                this.wordView.on('progress', this.progress);
            },

            progress : function () {
                this.showImage();
            },

            render : function () {
                this.appendWord();
                this.appendImage();
                this.observeSubViewEvents();

                return this;
            },

            show : function () {
                this.wordView.show();
                this.zIndex = this.zIndex += 1;
                this.$el.css({
                    zIndex : this.zIndex
                });
            },

            showImage : function () {
                this.wordView.hide();
                this.imageView.show();
            },

            showing : 'word',
            zIndex : 1
        });

    return CardView;
});
