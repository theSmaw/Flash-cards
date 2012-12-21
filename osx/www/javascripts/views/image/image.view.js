define(function () {
    var ImageView = Backbone.View.extend({

            className : 'image',

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
                var template = _.template('<img src="<%= url %>" />');

                this.$el.html(template({
                    url : this.model.get('url')
                }));

                return this;
            },

            show : function () {
                this.$el.css({
                    display : 'block'
                });
            },

            tagName : 'div'
        });

    return ImageView;
});
