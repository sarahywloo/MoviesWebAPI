namespace MoviesWebAPI.Services {

    export class FortuneCookieService {

        private fortuneArray = [
            'If you refuse to accept anything but the best, you very often get it!',
            'The greatest risk is not taking one.',
            'Now is the time to try something new!'
        ];

        public generateFortune() {
            return this.fortuneArray[Math.floor(Math.random() * this.fortuneArray.length)];
            }
        }

    angular.module('MoviesWebAPI').service('FortuneCookieService', FortuneCookieService);
    }



