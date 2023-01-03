using Microsoft.EntityFrameworkCore;
using SmartStitchesWithLove.Data;
using SmartStitchesWithLove.Models;

namespace SmartStitchesWithLove.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly SSDbContext _SSDbContext;
        public ProductRepository(SSDbContext sSDbContext)
        {
            this._SSDbContext = sSDbContext;
        }
        public async Task<Product> CreateProductAsync(Product Product)
        {
            Product.Id = new int();
            await _SSDbContext.Products.AddAsync(Product);
            await _SSDbContext.SaveChangesAsync();
            return Product;

        }

        public async Task<Product> DeleteProductAsync(int id)
        {
            var Product = await _SSDbContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (Product == null)
            {
                return null;
            }

            _SSDbContext.Products.Remove(Product);
            await _SSDbContext.SaveChangesAsync();
            return Product;
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _SSDbContext.Products.ToListAsync();
        }

        public async Task<Product> GetAsync(int id)
        {
            return await _SSDbContext.Products.FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<Product> UpdateProductAsync(int id, Product product)
        {
            var existingProduct = await _SSDbContext.Products.FirstOrDefaultAsync();
            if (existingProduct == null) { return null; }

            existingProduct.size = product.size;
            existingProduct.quantity = product.quantity;
            existingProduct.title = product.title;
            existingProduct.description = product.description;
            existingProduct.brand = product.brand;
            existingProduct.color = product.color;
            existingProduct.composition = product.composition;
      


    
        await _SSDbContext.SaveChangesAsync();
            return existingProduct;
        }
    }
}
