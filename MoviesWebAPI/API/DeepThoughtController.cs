using MoviesWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace MoviesWebAPI.API
{
    public class DeepThoughtController : ApiController
    {

        public IHttpActionResult GetAnswer()
        {
            Thread.Sleep(3000);
            var possibilities = new string[]
            {
                "42", "popcorn", "vacations", "money", "friends", "movies"

            };
            var rnd = new Random();
            var index = rnd.Next(possibilities.Length);
            var answer = new Answer { Text = "The answer is " + possibilities[index] };
            return Ok(answer);
        }

        [Route("api/DeepThought/Fortune")]
        public IHttpActionResult GetFortune()
        {
            Thread.Sleep(3000);
            var possibilities = new string[]
            {
                "You are destined to be eaten by a bear.",
                "You will be rich and powerful beyond your dreams.",
                "You will win a talent show and start a succesful rock band."
            };
            var rnd = new Random();
            var index = rnd.Next(possibilities.Length);
            var answer = new Answer { Text = possibilities[index] };
            return Ok(answer);
        }


    }
}
