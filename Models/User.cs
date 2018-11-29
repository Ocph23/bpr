using System;
using Ocph.DAL;

namespace bprapp {

    [TableName ("user")]
    public class User {

        [PrimaryKey ("userid")]
        [DbColumn ("userid")]
        public int UserId { get; set; }

        [DbColumn ("UserName")]
        public string UserName { get; set; }

        [DbColumn ("Password")]
        public string Password { get; set; }

    }

    public class Register {

        public int UserId { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

        public bool IsValid{
            get {

                if (string.IsNullOrEmpty (UserName) || string.IsNullOrEmpty (Password))
                    return false;

                if (Password != ConfirmPassword)
                    return false;

                return true;

            }
        }

    }

}