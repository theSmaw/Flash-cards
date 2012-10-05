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

                this.imageView.bind('progress', function () {
                    alert('a')
                });

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
                this.$el.css({
                    zIndex : 2
                });
            },

            showImage : function () {
                this.wordView.hide();
                this.imageView.show();
            },

            showing : 'word'
        });

    return CardView;
});
