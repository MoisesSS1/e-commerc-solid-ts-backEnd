import { CreateAdminController } from "./CreateAdminController";
import { CreateAdminUseCase } from "./CreateAdminUseCase";


const createAdminUseCase = new CreateAdminUseCase()
const createAdminController = new CreateAdminController(createAdminUseCase)


export { createAdminController, createAdminUseCase }