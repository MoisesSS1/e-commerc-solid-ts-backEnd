import { Router } from "express";
import { createAdminController } from "./useCases/adminUseCase/createAdminUseCase";
import { createProductController } from "./useCases/productUseCase/createProductUseCase";

const routes = Router()

routes.post("/admin/create", async (req, res) => {
    await createAdminController.handle(req, res)
})

routes.post("/product/create", async (req, res) => {
    await createProductController.handle(req, res)
})




export { routes }

