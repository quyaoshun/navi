angular.module('bookAnimations', ['ngAnimate'])
;var naviApp = angular.module('naviApp', ['ngRoute', 'bookControllers', 'bookFilters', 'bookServices'])

naviApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/books', {
            templateUrl: 'partials/book_list.html',
            controller: 'BookListCtrl'
        }).when('/books/:bookId', {
            templateUrl: 'partials/book_detail.html',
            controller: 'BookDetailCtrl'
        }).otherwise({
            redirectTo: '/books'
        })
    }
])
;var bookControllers = angular.module('bookControllers', [])
bookControllers.controller('BookListCtrl', ['$scope', 'Book',
    function($scope, Book) {
        $scope.books = Book.query()
        $scope.orderProp = 'title'
    }
])

bookControllers.controller('BookDetailCtrl', ['$scope', '$routeParams', 'Book',
    function($scope, $routeParams, Book) {
        $scope.book = Book.get({ bookId: $routeParams.bookId }, function(book){
            $scope.imgUrl = phone.imgUrl
        })
        $scope.setImage = function(url){
            $scope.imgUrl = url
        }
    }
])
;angular.module('bookFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718'
    }
})
;var bookServices = angular.module('bookServices', ['ngResource'])

bookServices.factory('Book', ['$resource',
    function($resource) {
        return $resource('api/books/:bookId', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        })
    }
])
