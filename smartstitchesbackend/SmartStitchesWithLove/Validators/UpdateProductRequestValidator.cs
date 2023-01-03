using FluentValidation;
using SmartStitchesWithLove.InputModels;

namespace SmartStitchesWithLove.Validators
{
    public class UpdateProductRequestValidation : AbstractValidator<UpdateProductInputModel>
    {
        public UpdateProductRequestValidation()
        {

            RuleFor(x => x.title).NotEmpty();
            RuleFor(x => x.description).NotEmpty();
            RuleFor(x => x.color).NotEmpty();
        }
    }
}


