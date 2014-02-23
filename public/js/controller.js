var BookControllers = angular.module('BookControllers', [])
BookControllers.controller('BookListCtrl', ['$scope', '$http',
    function($scope, $http) {
        /* $scope.books = [{
        "releaseDate": "2014-03-08T13:16:26.000Z",
        "press": "test0",
        "author": "test0",
        "desc": "test0",
        "title": "test0",
        "_id": "5308bae92b065f4316c91688",
        "__v": 0,
        "updateTime": "2014-02-22T14:57:45.052Z",
        "createTime": "2014-02-22T14:57:45.051Z",
        "comments": [],
        "categories": "Uncategorized",
        "tags": []
    }] */
        $http.get('/api/books/list').success(function(data) {
            $scope.books = data.books
        })
        $scope.orderProp = 'title'
    }
])

BookControllers.controller('BookDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('/api/books/' + $routeParams.bookId).success(function(data){
            $scope.book = data
            console.log($scope.book)
            $scope.hello = function(name){
                alert('hello' + (name || 'world') + '!')
            }
        })
    }
])
