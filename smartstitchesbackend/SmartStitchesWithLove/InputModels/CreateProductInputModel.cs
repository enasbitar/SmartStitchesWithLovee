namespace SmartStitchesWithLove.InputModels
{
    public class CreateProductInputModel
    {
        public int size { get; set; }
        public string quantity { get; set; } = string.Empty;
        public string title { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public string brand { get; set; } = string.Empty;
        public string color { get; set; } = string.Empty;
        public string composition { get; set; } = string.Empty;
        public string image { get; set; } = string.Empty;
    }
}
