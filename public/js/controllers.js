var naviControllers = angular.module('naviControllers', [])

naviControllers.controller('HeaderCtrl', ["$scope", "$location",
    function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return $location.path() === viewLocation
        }
    }
])

naviControllers.controller('HomeContentCtrl', ["$scope",
    function($scope) {}
])

naviControllers.controller('BookListCtrl', [
    '$scope',
    'Book',
    '$modal',
    '$log',
    function($scope, Book, $modal, $log) {
        $scope.books = Book.query()
        $scope.orderProp = 'title'
        $scope.open = function(){
            var modalInstance = $modal.open({
                templateUrl: 'add_book.html',
                controller: 'ModalInstanceCtrl',
                resolve: {

                }
            })
            modalInstance.result.then(function(){
                // 返回新增的book对象
                // $scope.bookItem = bookItem
            }, function(){
                $log.info('Modal dismissed at: ' + new Date())
            })
        }
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

naviControllers.controller('ModalInstanceCtrl', ['$scope', '$modalInstance',
    function($scope, $modalInstance) {
        $scope.ok = function(){
            $modalInstance.close()
        } 
        $scope.cancel = function(){
            $modalInstance.dismiss('cancel')
        }
    }
])
