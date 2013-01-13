define([
    'views/image/image.view',
    'views/word/word.view'
], function (ImageView, WordView) {
    var CardView = function (card) {
            this.$el = $('<li class="card fade"></li>');
            this.image = card.image;
            this.word = card.word;
            _.bindAll(this);
        };
    
    CardView.prototype = {

        appendImage : function () {
            this.imageView = new ImageView(this.image);
            this.imageView.render();
            this.$el.append(this.imageView.$el);
        },

        appendWord : function () {
            this.wordView = new WordView(this.word);
            this.wordView.render();
            this.$el.append(this.wordView.$el);
        },

        cardComplete : function () {
            this.$el.trigger('cardComplete');
        },

        hide : function () {
            var el = this.$el;
            
            this.$el.css({
                opacity: 0
            });
            
            setTimeout(function () {
                el.css({
                    display: 'none',
                    'z-index': 1
                });
            }, 1000);
        },

        observeSubViewEvents : function () {
            this.imageView.$el.on('imageComplete', this.cardComplete);
            this.wordView.$el.on('wordComplete', this.progress);
        },

        progress : function () {
            this.showImage();
        },

        render : function () {
            this.appendWord();
            this.appendImage();
            this.observeSubViewEvents();
        },

        show : function () {
            var el = this.$el;
            
            this.wordView.show();
            this.$el.css({
                display: 'block',
                opacity: 1
            });
            
            setTimeout(function () {
                el.css({
                    'z-index': 2
                });
            }, 1000);
        },

        showImage : function () {
            this.wordView.hide();
        }
    };

    return CardView;
});
