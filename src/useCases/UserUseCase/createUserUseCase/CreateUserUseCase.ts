import { UserEntiti } from "../../../entities/UserEntiti";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IEncryptPassword } from "../../../services/password_encryption/IEncryptPassword";
import { CreateUserDTO } from "./CreateUserDTO";



export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,

    ) {

    }

    async execute({ name, email, password }: CreateUserDTO) {
        const checkUserExist = await this.usersRepository.findByEmail(email)

        if (checkUserExist) {
            throw new Error("Email já foi utilizado por outro usuário!")
        }

        let data = await new UserEntiti({ name, email, password })


        const saveUser = await this.usersRepository.save(data)
        return
    }
}