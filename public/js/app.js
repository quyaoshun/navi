var naviApp = angular.module('naviApp', ['ngRoute', 'BookControllers', 'bookFilters'])

naviApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/books', {
            templateUrl: 'partials/book_list.html',
            controller: 'BookListCtrl'
        }).when('/books/:bookId', {
            templateUrl: 'partials/book_detail.html',
            controller: 'BookDetailCtrl'
        }).otherwise({
            redirectTo: 'books'
        })
    }
])
