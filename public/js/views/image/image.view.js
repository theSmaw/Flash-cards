define([
    'js/libs/text!../../templates/image/image.template.html'
], function (ImageTemplate) {
    var ImageView = Backbone.View.extend({

            initialize : function () {
                _.bindAll(this, 'render');
            },

            render : function () {
                var template = _.template(ImageTemplate);

                this.$el.html(template({
                    url : this.model.get('url')
                }));

                return this;
            },

            tagName : 'div'
        });

    return ImageView;
});