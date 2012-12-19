define([
    'views/application/application.view'
], function (ApplicationView) {

    function Main() {
        this.applicationView = new ApplicationView();
        this.applicationView.render();
    }

    return Main;
});
