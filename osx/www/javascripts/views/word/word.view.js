define(function () {
    var WordView = Backbone.View.extend({

            className : 'word',

            events :  {
                'click button' : 'progress',
                'mousedown span span' : 'emphasize',
                'mouseup span span' : 'deEmphasize',
                'touchend span span' : 'deEmphasize',
                'touchstart span span' : 'emphasize'
            },
        
            deEmphasize : function (e) {
                var letter = $(e.target);

                letter.addClass('emphasize');
                letter.css('font-size', '3.2rem');
            },
        
            emphasize : function (e) {
                var letter = $(e.target);
                
                letter.removeClass('emphasize');
                letter.css('font-size', '5rem');
            },

            hide : function () {
                this.$el.css({
                    display: 'none',
                    opacity : 0
                });
            },

            initialize : function () {
                _.bindAll(this, 'render');
                this.render();
            },

            progress : function () {
                this.hide();
                this.trigger('progress');
            },

            render : function () {
                var template = _.template('<h2><%= word %></h2><button>&gt;</button>'),
                    word = this.splitWord(this.model.get('word'));

                this.$el.html(template({
                    word : word
                }));

                return this;
            },

            show : function () {
                this.$el.css({
                    display: 'block',
                    opacity : 1
                });
            },

            splitWord : function (word) {

                return '<span><span>' + word.join('</span></span><span><span>') + '</span></span>';
            },

            tagName : 'div'
        });

    return WordView;
});
