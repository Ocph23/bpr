using System;
using System.Collections;
using System.Linq;
using bprapp.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data;
using Newtonsoft.Json;
using Ocph.DAL;

namespace bprapp.Controllers {
    public class AccountController : Controller {
        public IActionResult Login (User user) {
            try {
                using (var db = new OcphDbContext ()) {
                    var result = db.Users.Where (O => O.UserName == user.UserName).FirstOrDefault ();
                    if (result != null) {
                        if (result.Password == user.Password)
                            return Ok ("Success");
                    }
                }
                throw new SystemException ("Anda tidak memiliki akes");
            } catch (System.Exception ex) {

                return BadRequest (ex.Message);
            }
        }

        public IActionResult Register (Register register) {
            try {
                if (register.IsValid) {
                    using (var db = new OcphDbContext ()) {
                        var saved = db.Users.Insert(new User{ UserName=register.UserName, Password=register.Password});
                        if (saved) {
                            return Ok ("Success");
                        }
                    }
                }
                throw new SystemException ("Lengkapi Data Anda");
            } catch (System.Exception ex) {

                return BadRequest (ex.Message);
            }
        }
    }

}