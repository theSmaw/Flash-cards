define(function () {
    var WordView = Backbone.View.extend({

            events : {
                'click' : 'wordClicked'
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

            show : function () {
                this.$el.css({
                    display : 'block'
                });
            },

            tagName : 'div',

            wordClicked : function () {
                console.log('w');
                this.trigger('wordClicked');
            }
        });

    return WordView;
});