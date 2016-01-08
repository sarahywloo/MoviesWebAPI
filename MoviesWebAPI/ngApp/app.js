var MoviesWebAPI;
(function (MoviesWebAPI) {
    angular.module('MoviesWebAPI', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/moviesList.html',
            controller: MoviesWebAPI.Controllers.MoviesController,
            controllerAs: 'movieList'
        })
            .when('/fortuneCookie', {
            templateUrl: '/ngApp/views/fortuneCookie.html',
            controller: MoviesWebAPI.Controllers.FortuneCookieController,
            controllerAs: 'fortune'
        });
    });
    angular.module('MoviesWebAPI').constant('message', 'Hello World!');
    angular.module('MoviesWebAPI').factory('movieFactory', function (title, link) {
        return {
            title: title,
            imdbLink: link
        };
    });
    var MovieService = (function () {
        function MovieService(message) {
            this.message = message;
            console.log(message);
        }
        return MovieService;
    })();
    angular.module('MoviesWebAPI').service('movieService', MovieService);
})(MoviesWebAPI || (MoviesWebAPI = {}));
