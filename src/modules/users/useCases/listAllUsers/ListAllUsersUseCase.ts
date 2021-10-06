import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("This user does not exist");
    }
    if (!user.admin) {
      throw new Error("Cannot access users list");
    }
    const admin = this.usersRepository.list();

    return admin;
  }
}

export { ListAllUsersUseCase };
