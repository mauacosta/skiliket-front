using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using netCoreSkilliketV2._0.Models;
using Microsoft.AspNetCore.Cors;

namespace netCoreSkilliketV2._0.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class QuejaController : ControllerBase
  {
    private readonly IConfiguration _configuration;

    public QuejaController(IConfiguration configuration)
    {
      _configuration = configuration;
    }
    [HttpGet]
    public JsonResult Get()
    {

      string query = @"
                   SELECT naturaleza, descripcion, correo, direccion, fecha FROM dbo.Queja";
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
    public JsonResult Post(Queja queja)
    {

      string query = @"
                   insert into dbo.Queja (naturaleza, descripcion, correo, direccion, fecha ) values 
                     (
                        '" + queja.Naturaleza + @"'
                        ,'" + queja.Descripcion + @"'
                        ,'" + queja.Correo + @"'
                        ,'" + queja.Direccion + @"'
                        ,'" + queja.Fecha + @"'
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

      return new JsonResult("Riesgo añadido exitosamente");
    }
    [HttpPut]
    public JsonResult Put(Queja queja)
    {

      string query = @"
                    update  dbo.Queja set
                    naturaleza = '" + queja.Naturaleza + @"'
                    ,descripcion = '" + queja.Descripcion + @"'
                    ,correo = '" + queja.Correo + @"'
                    ,direccion = '" + queja.Direccion + @"'
                    ,fecha =  '" + queja.Fecha + @"'
                    where Id = " + queja.Id + @"
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

      return new JsonResult("Queja editada exitosamente");
    }
    [HttpDelete("{Id}")]

    public JsonResult Delete(int Id)
    {

      string query = @"
                    delete from  dbo.Queja
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
