define(function () {
    var ImageView = function (image) {
            this.$el = $('<div class="image"></div>');
            this.image = image;
            this.observeViewEvents();
        };
    
    ImageView.prototype = {

        events :  {
            click : 'progress'
        },

        hide : function () {
            this.$el.css({
                display : 'none'
            });
        },
        
        observeViewEvents : function () {
            this.$el.bind('click', _.bind(this.imageComplete, this));
        },

        imageComplete : function () {
            this.hide();
            this.$el.trigger('imageComplete');
        },

        render : function () {
            var template = _.template('<img src="<%= image %>" />');

            this.$el.html(template({
                image : this.image
            }));
        },

        show : function () {
            this.$el.css({
                display : 'block'
            });
        }
    };

    return ImageView;
});
