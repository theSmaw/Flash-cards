define([
    'collections/Cards.js',
    'views/CardView.js'
], function (Cards, CardView) {
    var ApplicationView = Backbone.View.extend({
    
        appendItem : function (item) {
            var itemView = new CardView({
                model : item
            });

            this.$el.append(itemView.render().el);
        },
    
        el : $('#app'),
    
        initialize : function () {
            _.bindAll(this, 'render');
            this.collection = new Cards();
            this.collection.bind('reset', this.render);
            this.collection.fetch();
        },
    
        render : function () {
            var self = this;

            _(this.collection.models).each(function(item) {
                self.appendItem(item);
            });
        }
    });
    
    return ApplicationView;
});