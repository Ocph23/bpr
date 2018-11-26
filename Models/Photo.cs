using System;
using Ocph.DAL;


namespace bprapp
{
    [TableName("photo")]
    public class Photo
    {
        [DbColumn("PhotoId")]
        public int PhotoId { get; set; }

        [DbColumn("FileName")]
        public string FileName { get; set; }

        [DbColumn("Extention")]
        public string Extention { get; set; }
    }
}