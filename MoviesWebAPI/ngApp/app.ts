namespace MoviesWebAPI {

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

    class MovieService {
        constructor(private message) {
            console.log(message);
        }
    }

    angular.module('MoviesWebAPI').service('movieService', MovieService);


}