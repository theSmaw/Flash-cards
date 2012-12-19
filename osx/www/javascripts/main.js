define([
    'views/application/application.view'
], function (ApplicationView) {

    function Main() {
       alert('here')
        this.applicationView = new ApplicationView();
    }

    return Main;
});
