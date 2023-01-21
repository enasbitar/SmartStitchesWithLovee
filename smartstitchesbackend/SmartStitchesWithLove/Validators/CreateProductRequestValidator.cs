using FluentValidation;
using SmartStitchesWithLove.InputModels;


namespace SmartStitchesWithLove.Validators
{
    public class CreateProductRequestValidator : AbstractValidator<CreateProductInputModel>
    {
        public CreateProductRequestValidator()
        {
            RuleFor(x => x.title).NotEmpty();
            RuleFor(x => x.description).NotEmpty();
            RuleFor(x => x.color).NotEmpty();
            RuleFor(x => x.size).NotEmpty();
            RuleFor(x => x.quantity).NotEmpty();
            RuleFor(x => x.brand).NotEmpty();   
            RuleFor(x => x.composition).NotEmpty();
            RuleFor(x => x.image).NotEmpty();
        }
    }
}



