var bookServices = angular.module('bookServices', ['ngResource'])

bookServices.factory('Book', ['$resource',
    function($resource) {
        return $resource('api/books/:bookId', {
            bookId: '@bookId'
        }, {
            query: {
                method: 'GET',
                isArray: true
            },
            save: {
                method: 'POST'
            },
            update: {
                method: 'PUT'
            },
            remove: {
                method: 'DELETE'
            }
        })
    }
])
