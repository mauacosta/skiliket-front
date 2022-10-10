using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using netCoreSkilliketV2._0.Models;
using Microsoft.AspNetCore.Cors;
namespace netCoreSkilliketV2._0.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class NoticiaController : ControllerBase
  {
    private readonly IConfiguration _configuration;

    public NoticiaController(IConfiguration configuration)
    {
      _configuration = configuration;
    }
    [HttpGet]
    public JsonResult Get()
    {

      string query = @"
                   SELECT nombre, apellido, descripcion, correo, direccion, colonia, codigoPostal FROM dbo.Noticia";
      DataTable table = new DataTable();
      string sqlDataSource = _configuration.GetConnectionString("SkilliketAppCon");
      SqlDataReader myReader;
      using (SqlConnection myCon = new SqlConnection(sqlDataSource))
      {
        myCon.Open();
        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        {
          myReader = myCommand.ExecuteReader();
          table.Load(myReader); ;

          myReader.Close();
          myCon.Close();
        }
      }
      return new JsonResult(table);

    }
  }
}
