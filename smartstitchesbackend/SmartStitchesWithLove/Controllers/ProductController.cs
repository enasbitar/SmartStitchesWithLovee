using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartStitchesWithLove.InputModels;
using SmartStitchesWithLove.Repositories;

namespace SmartStitchesWithLove.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        //create an instance from the repository
        private readonly IProductRepository productRepository;

        //constructor to inject the teacher repository in the class
        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            //here were getting the  teachers from the DB using the repository 
            var products = await productRepository.GetAllAsync();
            //declare a teacher dto list to return it to th user
            var productsDto = new List<Dtos.ProductDto>();
            //loop over the teachers 
            products.ToList().ForEach(product =>
            {
                //create a teacher dto and fill it from the teacher model 
                var productDto = new Dtos.ProductDto()

                {

                    Id = product.Id,
                    size = product.size,
                    quantity = product.quantity,
                    title = product.title,
                    description = product.description,
                    brand = product.brand,
                    color = product.color,
                    composition = product.composition,

                };

                productsDto.Add(productDto);

            });
            return Ok(productsDto);
        }


        [HttpGet("{id:int}")]
        [ActionName("GetProductAsync")]
        public async Task<ActionResult> GetProductAsync(int id)

        {
            //use the repository
            var product = await productRepository.GetAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            // mapping
            var productDto = new Dtos.ProductDto()
            {
                Id = product.Id,
                size = product.size,
                quantity = product.quantity,
                title = product.title,
                description = product.description,
                brand = product.brand,
                color = product.color,
                composition = product.composition
            };
            return Ok(productDto);
        }






        [HttpPost]
        public async Task<IActionResult> CreateProduct(CreateProductInputModel createProductInputModel)
        {
            var product = new Models.Product()
            {
                size = createProductInputModel.size,
                quantity = createProductInputModel.quantity,
                title = createProductInputModel.title,
                description = createProductInputModel.description,
                brand = createProductInputModel.brand,
                color = createProductInputModel.color,
                composition = createProductInputModel.composition

            };
            product = await productRepository.CreateProductAsync(product);
            var productDto = new Dtos.ProductDto
            {
                Id = product.Id,
                size = product.size,
                quantity = product.quantity,
                title = product.title,
                description = product.description,
                brand = product.brand,
                color = product.color,
                composition = product.composition
            };

            return CreatedAtAction(nameof(GetProductAsync), new { id = productDto.Id }, productDto);

        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteProductAsync(int id)
        {
            var product = await productRepository.DeleteProductAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            var productDto = new Dtos.ProductDto
            {
                Id = product.Id,
                size = product.size,
                quantity = product.quantity,
                title = product.title,
                description = product.description,
                brand = product.brand,
                color = product.color,
                composition = product.composition,
            };

            return Ok(productDto);
        }


        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateProductAsync([FromRoute] int id, [FromBody] UpdateProductInputModel updateProductInputModel)
        {
            //convert Dto to model 
            var product = new Models.Product()
            {
                size = updateProductInputModel.size,
                quantity = updateProductInputModel.quantity,
                title = updateProductInputModel.title,
                description = updateProductInputModel.description,
                brand = updateProductInputModel.brand,
                color = updateProductInputModel.color,
                composition = updateProductInputModel.composition,
            };


            //update teacher using repository

            product = await productRepository.UpdateProductAsync(id, product);
            //if null return not found 
            if (product == null)
            {

                return NotFound();
            }

            //convert from model back to doto 
            var productDto = new Dtos.ProductDto
            {
                Id = product.Id,
                size = product.size,
                quantity = product.quantity,
                title = product.title,
                description = product.description,
                brand = product.brand,
                color = product.color,
                composition = product.composition,
            };

            return Ok(productDto);
            //return Ok Response

        }
    }
}
