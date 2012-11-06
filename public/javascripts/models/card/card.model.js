define(function () {
    var Card = Backbone.Model.extend({
            defaults : {
                url : 'url',
                word : 'word'
            }
        });

    return Card;
});