﻿using MoviesWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesWebAPIApp.API
{
    public class MoviesController : ApiController
    {

        private ApplicationDbContext _db = new ApplicationDbContext();

        // GET: api/Movies
        public IEnumerable<Movie> Get()
        {
            return _db.Movies.OrderByDescending(m => m.Id).Take(25).ToList();
        }

        // GET: api/Movies/5
        public HttpResponseMessage Get(int id)
        {
            var movie = _db.Movies.Find(id);
            if (movie == null) {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            return Request.CreateResponse(HttpStatusCode.OK, movie);
        }

        // POST: api/Movies
        public HttpResponseMessage Post(Movie movie)
        {
            if (ModelState.IsValid) {
                if (movie.Id == 0) {
                    _db.Movies.Add(movie);
                    _db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, movie);
                }
                else {
                    var original = _db.Movies.Find(movie.Id);
                    original.Title = movie.Title;
                    original.IMDBLink = movie.IMDBLink;
                    _db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, movie);
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);
        }

      

        // DELETE: api/Movies/5
        public HttpResponseMessage Delete(int id)
        {
            var movie = _db.Movies.Find(id);
            if (movie == null) {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            _db.Movies.Remove(movie);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/movies/search/{search}")]
        public IEnumerable<Movie> GetSearch(string search)
        {
            return _db.Movies.Where(m => m.Title.StartsWith(search)).ToList();
        }

    }
}
