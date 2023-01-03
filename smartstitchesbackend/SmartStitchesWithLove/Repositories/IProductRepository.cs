using SmartStitchesWithLove.Models;

namespace SmartStitchesWithLove.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllAsync();

        Task<Product> GetAsync(int id);

        Task<Product> CreateProductAsync(Product product);

        Task<Product> DeleteProductAsync(int id);

        Task<Product> UpdateProductAsync(int id, Product product);
    }
}
