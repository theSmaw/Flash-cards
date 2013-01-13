define(function () {
    var LetterView = function (letter) {
            this.$el = $('<span class="fade letter"></span>');
            this.letter = letter;
            this.observeViewEvents();
        };
    
    LetterView.prototype = {

        deEmphasize : function (e) {
            var letter = $(e.target);

            letter.addClass('emphasize');
            letter.css('font-size', '3.2rem');
        },
        
        hide : function () {
            this.$el.css({
                opacity : 0
            });
        },

        emphasize : function (e) {
            var letter = $(e.target);

            letter.removeClass('emphasize');
            letter.css('font-size', '5rem');
        },
        
        observeViewEvents : function () {
            this.$el.on('mousedown touchstart', _.bind(this.emphasize, this));
            this.$el.on('mouseup touchend', _.bind(this.deEmphasize, this));  
        },

        render : function () {
            this.$el.html('<span>' + this.letter + '</span>');
        },

        show : function () {
            this.$el.css({
                opacity : 1
            });
        }
    };

    return LetterView;
});
