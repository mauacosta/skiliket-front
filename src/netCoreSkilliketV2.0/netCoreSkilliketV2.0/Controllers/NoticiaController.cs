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
                   SELECT Id, nombre, apellido, descripcion, correo, direccion, colonia, codigoPostal, tipoUsuario FROM dbo.Noticia";
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

    [HttpPost]
    public JsonResult Post(Noticia noticia)
    {

      string query = @"
                   insert into dbo.Noticia (nombre, apellido, descripcion, correo, direccion, colonia, codigoPostal, tipoUsuario) values 
                     (
                        '" + noticia.Nombre + @"'
                        ,'" + noticia.Apellido+ @"'
                        ,'" + noticia.Descripcion + @"'
                        ,'" + noticia.Correo+ @"'
                        ,'" + noticia.Direccion + @"'
                        ,'" + noticia.Colonia + @"'
                        ,'" + noticia.CodigoPostal + @"'
                        ,'" + noticia.TipoUsuario + @"'
                       )
                    ";

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

      return new JsonResult("Noticia a??adida exitosamente");
    }
    [HttpPut]
    public JsonResult Put(Noticia noticia)
    {

      string query = @"
                    update  dbo.Noticia set
                    nombre = '" + noticia.Nombre + @"'
                    ,apellido = '" + noticia.Apellido + @"'
                    ,descripcion = '" + noticia.Descripcion + @"'
                    ,correo = '" + noticia.Correo + @"'
                    ,direccion =  '" + noticia.Direccion + @"'
                    ,colonia =  '" + noticia.Colonia + @"'
                    ,codigoPostal =  '" + noticia.CodigoPostal + @"'
                    ,tipoUsuario =  '" + noticia.TipoUsuario + @"'
                    where Id = " + noticia.Id + @"
                    ";

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

      return new JsonResult("Noticia editada exitosamente");
    }
    [HttpDelete("{Id}")]

    public JsonResult Delete(int Id)
    {

      string query = @"
                    delete from  dbo.Noticia
                    where Id = " + Id + @"
                    ";

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

      return new JsonResult("Queja eliminada exitosamente");
    }
  }
}
