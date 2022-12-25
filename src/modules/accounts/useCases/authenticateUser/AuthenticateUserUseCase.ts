import {inject, injectable} from 'tsyringe';
import {IUserRepository} from '../../repositories/User/IUserRepository';

import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import {AppError} from '../../../../shared/errors/AppError';

@injectable()
export class AuthenticateUserUseCase {
  constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
  ) {}


  async execute({email, password}: AuthRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    // generate json web token
    const token = sign({}, 'ca38b36d19915a0827b7f6d2987760ae', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}
