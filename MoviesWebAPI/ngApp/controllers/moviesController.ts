namespace MoviesWebAPI.Controllers {

    export class MoviesController {    

        public movies;
        public genres;
        public selectedGenre;

        //typescript automatically makes the $http a property
        //dependency injection
        //removing the definition here causes you to lose auto-complete on $http
        constructor(private $http: ng.IHttpService, message: string, movieFactory: Function, movieService) {

            movieFactory('Star Wars VII', 'http://starwars.com');

            movieService.logMessage();

            console.log(message);
            this.$http.get('/api/movies')
                .then((response) => {
                    console.log(response);
                    this.movies = response.data;
                })
                .catch((response) => {
                    console.log(`Oh no!${response.statusText}`);
                });

            this.$http.get('/api/genres')
                .then((response) => {
                    console.log(response);
                    this.genres = response.data;
                })
                .catch((response) => {
                    console.log(`Oh no!${response.statusText}`);
                });
        }

        public getMovies() {
            this.$http.get(`/api/genres/${this.selectedGenre.id}`)
                .then((response) => {
                    console.log(response);
                    //If you want to keep the autocomplete function on $http, declare data to be type: any (see below)  
                    let data: any = response.data;
                    this.movies = data.movies;
                })
                .catch((response) => {
                    console.log(`Oh no!${response.statusText}`);
                });
        }
    }
}