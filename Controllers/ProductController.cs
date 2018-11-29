using System;
using System.Collections;
using System.Linq;
using bprapp.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data;
using Newtonsoft.Json;
using Ocph.DAL;

namespace bprapp.Controllers {
    public class ProductController : Controller {
        public IEnumerable Get () {
            using (var db = new OcphDbContext ()) {
                return db.Products.Select ().ToList ();
            }
        }

        public IActionResult GetById (int id) {
            try {
                using (var db = new OcphDbContext ()) {
                    var result = db.Products.Where (O => O.ProductId == id).FirstOrDefault ();
                    return Ok (result);
                }
            } catch (System.Exception ex) {
                return BadRequest (ex);
            }
        }

        public IActionResult Post ([FromBody] Product model) {
            model.CreateDate = DateTime.Now;
            model.UpdateDate = model.CreateDate;

            try {
                using (var db = new OcphDbContext ()) {
                    var saved = db.Products.InsertAndGetLastID (model);
                    return Ok (saved);
                }
            } catch (System.Exception ex) {
                return BadRequest (ex);
            }

        }

        [HttpPut]
        public IActionResult Put (int id,[FromBody] Product data) {

            try {

                if (data != null) {
                    data.UpdateDate = DateTime.Now;
                    if (id <= 0)
                        throw new SystemException ("Data Tidak Ditemukan");
                    else
                        using (var db = new OcphDbContext ()) {
                            var saved = db.Products.Update (O => new {
                                O.Content, O.UpdateDate, O.ImageURL, O.Name,
                                    O.ShortDescription, O.Title, O.Status
                            }, data, O => O.ProductId == id);
                            return Ok (saved);
                        }
                } else
                    throw new SystemException ("Data Tidak Ditemukan");

            } catch (System.Exception ex) {
                return BadRequest (ex);
            }

        }

        [HttpDelete]
        public IActionResult Delete (int id) {
            try {
                if (id <= 0)
                    throw new SystemException ("Data Tidak Ditemukan");
                else
                    using (var db = new OcphDbContext ()) {
                        var saved = db.Products.Delete(O => O.ProductId == id);
                        return Ok (saved);
                    }

            } catch (System.Exception ex) {
                return BadRequest (ex);
            }

        }

    }
}