import { GetToken } from "../../../services/auth/GetToken";
import { LoginUserDTO } from "./LoginUserDTO"

export class LoginUserUseCase {
    constructor() {

    }

    async execute({ email, password }: LoginUserDTO) {

        const getToken = await GetToken({ email, password })

        return getToken
        //

    }
}