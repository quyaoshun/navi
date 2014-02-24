var naviApp = angular.module('naviApp', ['ngRoute','bookAnimations', 'naviControllers', 'bookFilters', 'bookServices'])

naviApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/home_content.html',
            controller: 'HomeContentCtrl'
        }).when('/books', {
            templateUrl: 'partials/book_list.html',
            controller: 'BookListCtrl'
        }).when('/books/:bookId', {
            templateUrl: 'partials/book_detail.html',
            controller: 'BookDetailCtrl'
        }).when('/movies', {

        }).when('/others', {

        }).otherwise({
            redirectTo: '/'
        })
    }
])
