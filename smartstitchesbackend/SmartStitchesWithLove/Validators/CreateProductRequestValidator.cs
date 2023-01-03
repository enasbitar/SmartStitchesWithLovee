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

        }
    }
}

