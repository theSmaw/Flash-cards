define(function () {
    var WordView = Backbone.View.extend({

            initialize : function () {
                _.bindAll(this, 'render');
            },

            render : function () {
                var template = _.template('<h2><%= word %></h2>');

                this.$el.html(template({
                    word : this.model.get('word')
                }));

                return this;
            },

            tagName : 'div'
        });

    return WordView;
});