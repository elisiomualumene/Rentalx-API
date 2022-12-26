import { AppError } from './../../../errors/AppError';
import { UserRepository } from "../../../../modules/accounts/repositories/User/implementation/UserRepository";
import { NextFunction, Request, Response } from "express";

export async function EnsureAdmin(req: Request, res: Response, next: NextFunction){
    const {user_id} = req.user;

    const id = user_id;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(id);

    if(!user.isAdmin){
        throw new AppError('User is not a admin')
    }

    return next()
}