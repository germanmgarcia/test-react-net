using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi_Test_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "JUAN", "JOSÉ", "MARÍA", "FRANCISCO", "GUADALUPE", "JUANA", "ANTONIO", "JESÚS", "JULIAN", "CARLOS"
        };

        private readonly ILogger<PersonController> _logger;

        public PersonController(ILogger<PersonController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Person> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new Person
            {
                Identificacion = rng.Next(12345, 789123),
                Nombre = Summaries[rng.Next(Summaries.Length)],
                Edad = rng.Next(18, 55),
                FechaNacimiento = DateTime.Now.AddDays(index),           
            })
            .ToArray();
        }
    }
}
