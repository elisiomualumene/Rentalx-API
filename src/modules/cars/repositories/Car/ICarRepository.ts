import { ICreateCarDTO } from '../../types/dtos';

interface ICarRepository {
    create(data: ICreateCarDTO): Promise<void>
}

export {ICarRepository}