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
                    book: function() {
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
                    book: function() {
                        return $scope.book
                    }
                }
            })
            modalInstance.result.then(function() {
                // $scope.book = book
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            })
        }

        $scope.openRemove = function() {
            var modalInstance = $modal.open({
                templateUrl: 'remove_book.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    book: function() {
                        return $scope.book
                    }
                }
            })
            modalInstance.result.then(function() {
                // $scope.book = book
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            })
        }
    }
])

naviControllers.controller('ModalInstanceCtrl', [
    '$scope', 'Book', '$modalInstance', 'book','$location',
    function($scope, Book, $modalInstance, book, $location) {
        $scope.book = book
        $scope.add = function() {
            $scope.book = book
            Book.save(book)
            $modalInstance.close(book)
        }
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel')
        }
        $scope.update = function() {
            $scope.book = book
            $modalInstance.close(book)
            Book.update({
                bookId: $scope.book._id
            }, book)
        }
        $scope.remove = function() {
            Book.remove({}, {
                bookId: $scope.book._id
            }, function(){
                $modalInstance.close($scope.book)
                $location.path('/books')
            })
        }
    }
])
