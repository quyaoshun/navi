var bookServices = angular.module('bookServices', ['ngResource'])

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
