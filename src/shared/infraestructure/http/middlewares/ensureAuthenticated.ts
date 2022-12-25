import {AppError} from '../../../errors/AppError';
import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';
import {UserRepository} from '../../../../modules/accounts/repositories/User/implementation/UserRepository';

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const {sub: id} = verify(token, 'ca38b36d19915a0827b7f6d2987760ae') as IPayload;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      user_id: id,
    };

    next();
  } catch {
    throw new AppError('Invalid Token!', 401);
  }
}
