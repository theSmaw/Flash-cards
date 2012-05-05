define([
    'libs/text!templates/CardTemplate.html'
], function (CardTemplate) {
    var CardView = Backbone.View.extend({
    
            initialize : function () {
                _.bindAll(this, 'render');
            },
    
            render : function () {
                var template = _.template(CardTemplate);
                
                this.$el.html(template({
                    word : this.model.get('word'),
                    url : this.model.get('url')
                }));
           
                return this;
            },
    
            tagName : 'li'
        });
    
    return CardView;
});