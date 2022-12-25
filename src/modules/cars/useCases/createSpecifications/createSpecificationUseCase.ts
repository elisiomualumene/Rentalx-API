import {inject, injectable} from 'tsyringe';
import {ISpecificationRepository} from '../../repositories/Specification/implementation/ISpecificationRepository';
import {IRequest} from '../../types/services';
import {AppError} from '../../../../shared/errors/AppError';

@injectable()
class createSpecificationUseCase {
  constructor(
        @inject('RepositorySpecification')
        private SpecificationRepository: ISpecificationRepository) {}

  async execute({name, description}: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.SpecificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Category Already exists!');
    }

    await this.SpecificationRepository.create({name, description});
  };
}

export {createSpecificationUseCase};
