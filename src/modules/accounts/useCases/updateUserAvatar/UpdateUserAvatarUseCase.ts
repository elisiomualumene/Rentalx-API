import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserAvatarUseCase{
    constructor(
        @inject("UserRepository")
        private userReposity: IUserRepository){}

        async execute({ avatar_file, user_id }: IUpdateUser): Promise<void>{
            const user = await this.userReposity.findById(user_id);

            user.avatar = avatar_file;

            await this.userReposity.create(user)

        }
     
}

export { UpdateUserAvatarUseCase };