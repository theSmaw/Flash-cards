define([
    'views/application/application.view'
], function (ApplicationView) {

    function Main() {
        this.applicationView = new ApplicationView();
    }

    return Main;
});