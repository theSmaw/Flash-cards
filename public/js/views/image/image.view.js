define(function () {
    var ImageView = Backbone.View.extend({

            initialize : function () {
                _.bindAll(this, 'render');
            },

            render : function () {
                var template = _.template('<img src="<%= url %>" />');

                this.$el.html(template({
                    url : this.model.get('url')
                }));

                return this;
            },

            tagName : 'div'
        });

    return ImageView;
});