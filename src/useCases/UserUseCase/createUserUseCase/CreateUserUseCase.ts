import { UserEntiti } from "../../../entities/UserEntiti";
import { CreateUserDTO } from "./CreateUserDTO";



export class CreateUserUseCase {

    constructor() {

    }

    async execute({ name, email, password }: CreateUserDTO) {
        const _id = "sasa"
        const user = await new UserEntiti({ _id, name, email, password })

        return user
    }

}