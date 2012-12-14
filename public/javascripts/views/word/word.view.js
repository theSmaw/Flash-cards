define(function () {
    var WordView = Backbone.View.extend({

            className : 'word',

            events :  {
                click : 'progress'
            },

            initialize : function () {
                _.bindAll(this, 'render');
                this.render();
            },

            render : function () {
                var template = _.template('<h2><%= word %></h2>');

                this.$el.html(template({
                    word : this.model.get('word')
                }));

                return this;
            },

            hide : function () {
                this.$el.css({
                    display : 'none'
                });
            },

            progress : function () {
                this.hide();
                this.trigger('progress');
            },

            show : function () {
                this.$el.css({
                    display : 'block'
                });
            },

            tagName : 'div'
        });

    return WordView;
});
