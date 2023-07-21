import { Router } from "express";
import { createAdminController } from "./useCases/adminUseCase/createAdminUseCase";

const routes = Router()

routes.post("/", async (req, res) => {

    await createAdminController.handle(req, res)

})




export { routes }

