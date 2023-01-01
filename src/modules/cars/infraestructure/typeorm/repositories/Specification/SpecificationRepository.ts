
import {Specification} from '../../entities/Specification';
import {ISpecificationRepository} from '../../../../repositories/Specification/implementation/ISpecificationRepository';
import {Repository} from 'typeorm';
import {AppDataSource} from '../../../../../../shared/infraestructure/database/index';
import {ISpecificationDTO} from '../../../../types/dtos';
import { In } from 'typeorm';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = AppDataSource.getRepository(Specification);
  }
  async create({name, description}: ISpecificationDTO): Promise<Specification> {
    const Specification = this.specifications.create({
      name,
      description,
    });
    await this.specifications.save(Specification);

    return Specification
  };

  async findByName(name: string): Promise<any> {
    // / SQL -> select * from Specifications where name = name;
    const specification = await this.specifications.findOneBy({name});

    return specification;
  };

  async list(): Promise<Specification[]> {
    const allRegister = await this.specifications.find();
    return allRegister;
  };

  async findByIds(ids: any[]): Promise<Specification[]> {
    const specification: any[] = await this.specifications.findBy({ id: In(ids) })

    return specification
}
}

export {SpecificationRepository};
