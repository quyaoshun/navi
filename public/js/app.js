var naviApp = angular.module('naviApp', ['ngRoute', 'BookControllers'])

naviApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/books', {
            templateUrl: 'partials/book_list.html',
            controller: 'BookListCtrl'
        }).when('/books/:bookid', {
            templateUrl: 'partials/book_detail.html',
            controller: 'BookDetailCtrl'
        }).otherwise({
            redirectTo: 'books'
        })
    }
])
