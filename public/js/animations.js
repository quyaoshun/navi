var bookAnimations = angular.module('bookAnimations', ['ngAnimate'])

bookAnimations.animation('.book', function() {
    var animations = {
        addClass: function(element, className, done) {
            if (className !== 'active') {
                return
            }
            element.css({
                position: 'absolute',
                top: 500,
                left: 0,
                display: 'block'
            })

            $(element).animate({
                top: 0
            }, done)

            return function(cancel) {
                if (cancel) {
                    element.stop()
                }
            }
        },
        removeClass: function(element, className, done) {
            if (className !== 'active') {
                return
            }
            element.css({
                position: 'absolute',
                top: 0,
                left: 0
            })
            $(element).animate({
                top: -500
            }, done)

            return function(cancel) {
                if (cancel) {
                    element.stop()
                }
            }
        }
    }
    return animations
})
