import { Router } from "express";
import { createAdminController } from "./useCases/adminUseCase/createAdminUseCase";
import { createProductController } from "./useCases/productUseCase/createProductUseCase";
import { deleteProductController } from "./useCases/productUseCase/deleteProductUseCase";
import { showProductsController } from "./useCases/productUseCase/showProductUseCase";
import { updateProductController } from "./useCases/productUseCase/updateProductUseCase";
import { createUserController } from "./useCases/userUseCase/createUserUseCase";
import { loginUserUseController } from "./useCases/userUseCase/LoginUserUseCase";
import { CheckToken } from "./middlewares/checkToken/CheckToken";
import { showCartUseController } from "./useCases/cartUseCase/showItemsCartUseCase";
import { addToCartUseController } from "./useCases/cartUseCase/addToCartUseCase";


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
routes.get("/products", async (req, res) => {
    await showProductsController.handle(req, res)
})
routes.post("/product/update", async (req, res) => {

    await updateProductController.handle(req, res)
})

//User public routes
routes.post("/user/create", async (req, res) => {
    await createUserController.handle(req, res)
})
routes.post("/user/login", async (req, res) => {
    await loginUserUseController.handle(req, res)
})
//User private routes
routes.get("/user/test", CheckToken, (req, res) => {
    return res.send({ msg: "requisição" })
})


//Card routes
routes.get("/cart", CheckToken, async (req, res) => {
    await showCartUseController.handle(req, res)
})
routes.post("/cart/add", async (req, res) => {
    await addToCartUseController.handle(req, res)

})




export { routes }

