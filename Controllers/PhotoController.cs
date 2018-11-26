using System;
using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Ocph.DAL;
using MySql.Data;
using bprapp.Models;

namespace bprapp.Controllers
{
    public class PhotoController:Controller
    {
        public IEnumerable Get()
        {
           using(var db = new OcphDbContext())
           {
                return db.Photos.Select().ToList();
           }
        }
    }
}