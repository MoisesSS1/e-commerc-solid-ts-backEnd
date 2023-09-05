import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IAuthUser } from "../../../services/auth/IAuthUser";
import { IEncryptPassword } from "../../../services/password_encryption/IEncryptPassword";
import { LoginUserDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private encryptPassword: IEncryptPassword,
        private authUser: IAuthUser
    ) {

    }

    async execute({ email, password }: LoginUserDTO) {

        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new Error("Não existe usuário com esse e-mail!")
        }

        const checkPassword = await this.encryptPassword.checkUser(password, user.password)

        if (checkPassword === true) {
            const getToken = await this.authUser.GetToken(email, user._id)
            return getToken
        }

        return false

    }
}