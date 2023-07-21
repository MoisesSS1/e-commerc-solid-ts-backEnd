import { createAdminDTO } from "./CreateAdminDTO";
import { AdminEntiti } from "../../../entities/AdminEntiti";


export class CreateAdminUseCase {

    async execute({ email, password }: createAdminDTO) {

        //gerar _id de forma aleatoria
        const _id = "sasa"

        const admin = await new AdminEntiti({ _id, email, password })
        return admin
    }
}