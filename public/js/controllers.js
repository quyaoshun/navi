var naviControllers = angular.module('naviControllers', [])

naviControllers.controller('HeaderCtrl', ["$scope", "$location",
    function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return $location.path() === viewLocation
        }
    }
])

naviControllers.controller('BookListCtrl', ['$scope', 'Book',
    function($scope, Book) {
        $scope.books = Book.query()
        $scope.orderProp = 'title'
    }
])

naviControllers.controller('BookDetailCtrl', ['$scope', '$routeParams', 'Book',
    function($scope, $routeParams, Book) {
        $scope.book = Book.get({
            bookId: $routeParams.bookId
        }, function(book) {
            $scope.imgUrl = phone.imgUrl
        })
        $scope.setImage = function(url) {
            $scope.imgUrl = url
        }
    }
])
