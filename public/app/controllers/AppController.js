
let app = angular.module('MainApp', ["ui.router"]);

app.controller('MainAppController', function ($scope, $http) {

});


app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(function ($injector, $location) {
        let $state = $injector.get('$state');
        $state.go('/');
        return true;
    });

    $stateProvider.state('/', {
        url: '/',
        views: {
            "mainView": {
                templateUrl: "app/views/home.html",
                data: {title: 'Home'},
                controller: 'HomeController'
            }
        }
    })
});
