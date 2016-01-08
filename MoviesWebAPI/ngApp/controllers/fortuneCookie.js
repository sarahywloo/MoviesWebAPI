var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var FortuneCookieController = (function () {
            function FortuneCookieController(FortuneCookieService) {
                this.FortuneCookieService = FortuneCookieService;
                // the constructor function is used to reference the service. Its called when the class is created.
                // this.userFortune = FortuneCookieService.generateFortune();   
            }
            FortuneCookieController.prototype.getFortune = function () {
                this.userFortune = this.FortuneCookieService.generateFortune();
            };
            return FortuneCookieController;
        })();
        Controllers.FortuneCookieController = FortuneCookieController;
        angular.module('MoviesWebAPI').controller('FortuneCookieController', FortuneCookieController);
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
