define(function () {
    var WordView = Backbone.View.extend({

            className : 'word',

            events :  {
                'click button' : 'progress',
                'click span' : 'emphasize'
            },
        
            emphasize : function (e) {
                var letter = $(e.target);

                letter.stop().animate({
                    'font-size' : '3.5em'
                }, 75, function () {
                    letter.animate({
                        'font-size' : '3em'
                    }, 200);
                });
            },

            hide : function () {
                this.$el.css({
                    display: 'none',
                    opacity : 0
                });
            },

            initialize : function () {
                _.bindAll(this, 'render');
                this.render();
            },

            progress : function () {
                this.hide();
                this.trigger('progress');
            },

            render : function () {
                var template = _.template('<h2><%= word %></h2><button>&gt;</button>'),
                    word = this.splitWord(this.model.get('word'));

                this.$el.html(template({
                    word : word
                }));

                return this;
            },

            show : function () {
                this.$el.css({
                    display: 'block',
                    opacity : 1
                });
            },

            splitWord : function (word) {
                var letters = word.split('');

                return '<span>' + letters.join('</span><span>') + '</span>';
            },

            tagName : 'div'
        });

    return WordView;
});
