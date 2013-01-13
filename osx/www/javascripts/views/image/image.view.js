define(function () {
    var ImageView = function (image) {
            this.$el = $('<div class="image"></div>');
            this.image = image;
            this.observeViewEvents();
        };
    
    ImageView.prototype = {
        
        observeViewEvents : function () {
            this.$el.bind('click', _.bind(this.imageComplete, this));
        },

        imageComplete : function () {
            this.$el.trigger('imageComplete');
        },

        render : function () {
            var template = _.template('<img src="<%= image %>" />');

            this.$el.html(template({
                image : this.image
            }));
        }
    };

    return ImageView;
});
