namespace MoviesWebAPI.Controllers {

    export class FortuneCookieController {

        public userFortune;

        constructor(private FortuneCookieService: MoviesWebAPI.Services.FortuneCookieService) {
            // the constructor function is used to reference the service. Its called when the class is created.
            // this.userFortune = FortuneCookieService.generateFortune();   
        }

        public getFortune() {
            this.userFortune = this.FortuneCookieService.generateFortune();
        }
    }

    angular.module('MoviesWebAPI').controller('FortuneCookieController', FortuneCookieController);
}