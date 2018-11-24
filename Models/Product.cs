using System;
using Ocph.DAL;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;


namespace bprapp.Models
{
    [TableName("profile")]
    public class Product{

        private int profileId;
        [PrimaryKey("ProfileId")]
        [DbColumn("ProfileId")]
        public int ProfileId{get;set;}


        [DbColumn("Title")]
        public string Title { get; set; }

        [DbColumn("Content")]
        public string Content { get; set; }

        [DbColumn("CreateDate")]
        public DateTime CreateDate { get; set; }
        
        [DbColumn("UpdateDate")]
        public DateTime UpdateDate { get; set; }
        
         [JsonConverter(typeof(StringEnumConverter))]
        [DbColumn("status")]
        public ItemStatus Status { get; set; }

        [DbColumn("Name")]
        public string Name { get; set; }

        [DbColumn("ImageURL")]
        public string ImageURL { get; set; }

        [DbColumn("Tumbler")]
        public string Tumbler { get; set; }

    }
}