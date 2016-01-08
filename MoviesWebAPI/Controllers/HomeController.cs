using MoviesWebAPIApp.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MoviesWebAPI.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Reset()
        {
            var loader = new MovieLoader();
            loader.LoadMovies();
            return Content("Reset!");
        }
    }
}
