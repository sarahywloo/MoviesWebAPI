var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var MoviesController = (function () {
            //typescript automatically makes the $http a property
            //dependency injection
            //removing the definition here causes you to lose auto-complete on $http
            function MoviesController($http, message, movieFactory, movieService) {
                var _this = this;
                this.$http = $http;
                movieFactory('Star Wars VII', 'http://starwars.com');
                movieService.logMessage();
                console.log(message);
                this.$http.get('/api/movies')
                    .then(function (response) {
                    console.log(response);
                    _this.movies = response.data;
                })
                    .catch(function (response) {
                    console.log("Oh no!" + response.statusText);
                });
                this.$http.get('/api/genres')
                    .then(function (response) {
                    console.log(response);
                    _this.genres = response.data;
                })
                    .catch(function (response) {
                    console.log("Oh no!" + response.statusText);
                });
            }
            MoviesController.prototype.getMovies = function () {
                var _this = this;
                this.$http.get("/api/genres/" + this.selectedGenre.id)
                    .then(function (response) {
                    console.log(response);
                    //If you want to keep the autocomplete function on $http, declare data to be type: any (see below)  
                    var data = response.data;
                    _this.movies = data.movies;
                })
                    .catch(function (response) {
                    console.log("Oh no!" + response.statusText);
                });
            };
            return MoviesController;
        })();
        Controllers.MoviesController = MoviesController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
