var naviControllers = angular.module('naviControllers', [])

naviControllers.controller('HeaderCtrl', [
    "$scope", "$location",
    function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return $location.path() === viewLocation
        }
    }
])

naviControllers.controller('HomeContentCtrl', [
    "$scope",
    function($scope) {}
])

naviControllers.controller('BookListCtrl', [
    '$scope', 'Book', '$modal', '$log',
    function($scope, Book, $modal, $log) {
        $scope.books = Book.query()
        $scope.orderProp = 'title'
        $scope.book = {}
        $scope.open = function() {
            var modalInstance = $modal.open({
                templateUrl: 'add_book.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    book: function(){
                        return $scope.book
                    }
                }
            })
            modalInstance.result.then(function() {
                // 返回新增的book对象
                // $scope.bookItem = bookItem
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            })
        }
    }
])

naviControllers.controller('BookDetailCtrl', [
    '$scope', '$routeParams', 'Book', '$modal', '$log',
    function($scope, $routeParams, Book, $modal, $log) {
        $scope.book = Book.get({
            bookId: $routeParams.bookId
        })
        $scope.open = function() {
            var modalInstance = $modal.open({
                templateUrl: 'update_book.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    book: function(){
                        return $scope.book
                    }
                }
            })
            modalInstance.result.then(function() {
                // $scope.bookItem = bookItem
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            })
        }

    }
])

naviControllers.controller('ModalInstanceCtrl', [
    '$scope', '$modalInstance', 'book',
    function($scope, $modalInstance, book) {
        $scope.book = book
        $scope.ok = function() {
            $modalInstance.close($scope.book)
        }
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel')
        }
    }
])
