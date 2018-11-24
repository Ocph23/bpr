using System;
using System.Collections;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Ocph.DAL;
using MySql.Data;
using bprapp.Models;

namespace bprapp.Controllers
{
    public class ProfileController:Controller
    {
        public IEnumerable Get()
        {
           using(var db = new OcphDbContext())
           {
                return db.Profiles.Select().ToList();
           }
        }



        public IActionResult GetById(int id)
        {
            try
           {
                using(var db = new OcphDbContext())
            {
                var result = db.Profiles.Where(O=>O.ProfileId==id).FirstOrDefault();
                return Ok(result);
            }
           }
           catch (System.Exception ex)
           {
               return BadRequest(ex);
           }
        }


        public IActionResult Post([FromBody]Profile model){
            model.CreateDate=DateTime.Now;
            model.UpdateDate=model.CreateDate;

           try
           {
                using(var db = new OcphDbContext())
            {
                var saved = db.Profiles.InsertAndGetLastID(model);
                return Ok(saved);
            }
           }
           catch (System.Exception ex)
           {
               return BadRequest(ex);
           }

        }

    }
}