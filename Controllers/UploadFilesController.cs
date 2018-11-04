using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bprapp.Controllers
{
  public class UploadFilesController : Controller

    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public UploadFilesController(IHostingEnvironment host )
        {
            _hostingEnvironment=host;
        }

        #region snippet1

        [HttpPost("UploadFiles")]

        public async Task<IActionResult> Post(List<IFormFile> files)

        {
            long size = files.Sum(f => f.Length);

                string contentRootPath = _hostingEnvironment.ContentRootPath;
               var filePath = Path.Combine(
                        contentRootPath, "wwwroot");
                
                foreach (var file in files)
                {
                    var path = Path.Combine(contentRootPath, "wwwroot","Uploads", 
                        file.FileName);

                    if (file.Length > 0)
                    {
                        using (var stream = new FileStream(path, FileMode.Create))
                        {
                            await file.CopyToAsync(stream);
                        }
                    }
                }


            return Ok(new { count = files.Count, size, filePath});

        }

        #endregion

    }

    
}
