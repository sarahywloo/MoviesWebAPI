using MoviesWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;

namespace MoviesWebAPIApp.API
{
    public class GenresController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        // GET: api/Categories
        public IEnumerable<Genre> Get()
        {
            return _db.Genres.OrderBy(g => g.Name).ToList();
        }

        // GET: api/Categories/5
        public HttpResponseMessage Get(int id)
        {
            var genre = _db.Genres.Where(g => g.Id == id).Include(g => g.Movies).FirstOrDefault();
            if (genre == null) {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, genre);
        }

    
    }
}
