define([
    'js/libs/text!../../templates/word/word.template.html'
], function (WordTemplate) {
    var WordView = Backbone.View.extend({

            initialize : function () {
                _.bindAll(this, 'render');
            },

            render : function () {
                var template = _.template(WordTemplate);

                this.$el.html(template({
                    word : this.model.get('word')
                }));

                return this;
            },

            tagName : 'div'
        });

    return WordView;
});