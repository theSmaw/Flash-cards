define([
    'models/card/card.model'
], function (Card) {
    var Cards = Backbone.Collection.extend({
            model : Card,
        
            // iphone needs the full path
            url : 'http://localhost:3001/cards'
        
        // url : '/cards'
        });
    
    var cat = new Card({
        word : ['c', 'a', 't'],
        url : 'images/cat.jpg'
    });

    var dog = new Card({
        word : ['d', 'o', 'g'],
        url : 'images/dog.jpg'
    });

    var duck = new Card({
        word : ['d', 'u', 'c', 'k'],
        url : 'images/duck.jpg'
    });

    var owl = new Card({
        word : ['o', 'w', 'l'],
        url : 'images/owl.jpg'
    });

    var cards = new Cards([cat, dog, duck, owl]);
    
    return cards; 
});
