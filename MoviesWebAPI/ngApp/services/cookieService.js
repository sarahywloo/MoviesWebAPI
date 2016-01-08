var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Services;
    (function (Services) {
        var FortuneCookieService = (function () {
            function FortuneCookieService() {
                this.fortuneArray = [
                    'If you refuse to accept anything but the best, you very often get it!',
                    'The greatest risk is not taking one.',
                    'Now is the time to try something new!'
                ];
            }
            FortuneCookieService.prototype.generateFortune = function () {
                return this.fortuneArray[Math.floor(Math.random() * this.fortuneArray.length)];
            };
            return FortuneCookieService;
        })();
        Services.FortuneCookieService = FortuneCookieService;
        angular.module('MoviesWebAPI').service('FortuneCookieService', FortuneCookieService);
    })(Services = MoviesWebAPI.Services || (MoviesWebAPI.Services = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
