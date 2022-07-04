import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    try {
      const user = this.usersRepository.findById(user_id);

      if (user) {
        const superUser = this.usersRepository.turnAdmin(user);

        return superUser;
      }
    } catch (error) {
      return error;
    }
  }
}

export { TurnUserAdminUseCase };
