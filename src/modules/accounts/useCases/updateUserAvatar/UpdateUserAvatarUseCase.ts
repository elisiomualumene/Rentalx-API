import {inject, injectable} from 'tsyringe';
import {IUserRepository} from '../../repositories/User/IUserRepository';
import {deleteFile} from '../../../../utils/file';

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
        @inject('UserRepository')
        private userReposity: IUserRepository) {}

  async execute({avatar_file, user_id}: IUpdateUser): Promise<void> {
    const user = await this.userReposity.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.userReposity.create(user);
  }
}

export {UpdateUserAvatarUseCase};
