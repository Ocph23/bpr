using bprapp.Models;
using Ocph.DAL.Repository;

namespace bprapp {
    public class OcphDbContext : Ocph.DAL.Provider.MySql.MySqlDbConnection {
        public OcphDbContext () {
            this.ConnectionString = "Server=localhost;database=dbbpr;uid=root;password=";
        }

        public IRepository<Profile> Profiles { get { return new Repository<Profile> (this); } }
        public IRepository<Product> Products { get { return new Repository<Product> (this); } }
        public IRepository<Photo> Photos { get { return new Repository<Photo> (this); } }
        public IRepository<User> Users { get { return new Repository<User> (this); } }
    }
}