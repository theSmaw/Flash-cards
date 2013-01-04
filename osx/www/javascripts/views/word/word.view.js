define([
    'views/letter/letter.view'
], function (LetterView) {
    var WordView = function (word) {
            this.$el = $('<div class="word"></div>');
            this.word = word;
        };
    
    WordView.prototype = {
        
        addLetter : function (letter) {
            var letterView = new LetterView(letter);

            this.$word.append(letterView.$el);
            letterView.render();
        },
        
        addLetters : function () {
            var i;
            
            for (i = 0; i < this.word.length; i += 1) {
                this.addLetter(this.word[i]);
            }
        },
        
        addProgressButton : function () {
            this.$progressButton = $('<button>></button>');
            this.$el.append(this.$progressButton);  
        },

        hide : function () {
            this.$el.css({
                display: 'none',
                opacity : 0
            });
        },
        
        observeViewEvents : function () {
            this.$progressButton.on('click', _.bind(this.wordComplete, this)); 
        },

        wordComplete : function (e) {
            e.stopPropagation();
            this.hide();
            this.$el.trigger('wordComplete');
        },

        render : function () {
            this.$word = $('<h2></h2>');
            this.$el.append(this.$word);
            this.addLetters();
            this.addProgressButton();
            this.observeViewEvents();
        },

        show : function () {
            this.$el.css({
                display: 'block',
                opacity : 1
            });
        }
    };

    return WordView;
});
