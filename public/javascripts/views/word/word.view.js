define(function () {
    var WordView = Backbone.View.extend({

            className : 'word',

            events :  {
                click : 'progress'
            },

            hide : function () {
                this.$el.css({
                    display : 'none'
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
                var template = _.template('<h2><%= word %></h2>'),
                    word = this.splitWord(this.model.get('word'));

                this.$el.html(template({
                    word : word
                }));

                return this;
            },

            show : function () {
                this.$el.css({
                    display : 'block'
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
