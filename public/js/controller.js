var bookControllers = angular.module('bookControllers', [])
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
