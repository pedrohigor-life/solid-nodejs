import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    try {
      const user = this.usersRepository.findById(user_id);

      if (user && user.admin) return this.usersRepository.list();
    } catch (error) {
      return error;
    }
  }
}

export { ListAllUsersUseCase };
