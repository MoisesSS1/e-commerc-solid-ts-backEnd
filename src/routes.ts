import { Router } from "express";
import { createAdminController } from "./useCases/adminUseCase/createAdminUseCase";
import { createProductController } from "./useCases/productUseCase/createProductUseCase";
import { deleteProductController } from "./useCases/productUseCase/deleteProductUseCase";

const routes = Router()

//admin routes
routes.post("/admin/create", async (req, res) => {
    await createAdminController.handle(req, res)
})

//products routes
routes.post("/product/create", async (req, res) => {
    await createProductController.handle(req, res)
})
routes.post("/product/delete/:_id", async (req, res) => {
    await deleteProductController.handle(req, res)
})




export { routes }

