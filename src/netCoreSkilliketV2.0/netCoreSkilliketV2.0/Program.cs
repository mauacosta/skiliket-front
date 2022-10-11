using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//Enable CORS
builder.Services.AddCors(c =>
{
  c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
   .AllowAnyHeader());
});

//JSON Serializer
builder.Services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
    .Json.ReferenceLoopHandling.Ignore)
    .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
    = new DefaultContractResolver());
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
  options.AddPolicy(MyAllowSpecificOrigins,
                        policy =>
                        {
                          policy.WithOrigins("http://localhost:4200",
                                                "http://localhost:5000")
                                                .AllowAnyHeader()
                                                .AllowAnyMethod();
                        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.UseCors(MyAllowSpecificOrigins);
app.Run();
