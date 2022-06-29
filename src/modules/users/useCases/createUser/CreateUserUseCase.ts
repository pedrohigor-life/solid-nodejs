import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (!this.usersRepository.findByEmail(email)) {
      const user = this.usersRepository.create({
        name,
        email,
      });

      return user;
    }

    throw new Error("User already exists");
  }
}

export { CreateUserUseCase };
