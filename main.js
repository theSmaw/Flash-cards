define([
    'views/application/application.view.js'
], function (ApplicationView) {
    
    function Main() {
        this.applicationView = new ApplicationView();
    }
    
    return Main;
});