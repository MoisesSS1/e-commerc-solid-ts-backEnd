import { Router } from "express";
import { createProductController } from "./useCases/productUseCase/createProductUseCase";
import { deleteProductController } from "./useCases/productUseCase/deleteProductUseCase";
import { showProductsController } from "./useCases/productUseCase/showProductUseCase";
import { updateProductController } from "./useCases/productUseCase/updateProductUseCase";
import { CheckToken } from "./middlewares/checkToken/CheckToken";
import { showCartUseController } from "./useCases/cartUseCase/showItemsCartUseCase";
import { addToCartUseController } from "./useCases/cartUseCase/addToCartUseCase";
import { deleteItemCartUseController } from "./useCases/cartUseCase/deleteItemCart";
import { getAdressUseController } from "./useCases/DeliveryUseCase/getAdressUseCase";
import { createOrderUseController } from "./useCases/orderUseCase/createOrderUseCase";
import { createUserUseController } from "./useCases/user2UseCase/createUserUseCase";
import { loginUserUseController } from "./useCases/user2UseCase/loginUserUseCase";


const routes = Router()

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

//user routes
routes.post("/user/login", async (req, res) => {
    await loginUserUseController.handle(req, res)
})
routes.post("/user/create", async (req, res) => {
    await createUserUseController.handle(req, res)
})

//Card routes
routes.get("/cart", CheckToken, async (req, res) => {
    await showCartUseController.handle(req, res)
})
routes.post("/cart/add", CheckToken, async (req, res) => {
    await addToCartUseController.handle(req, res)
})

routes.post("/cart/delete", CheckToken, async (req, res) => {
    await deleteItemCartUseController.handle(req, res)
})

//Delivery routes
routes.post("/adress", async (req, res) => {
    await getAdressUseController.handle(req, res)
})

//Orders routes
routes.post("/orders/create", CheckToken, async (req, res) => {
    await createOrderUseController.handle(req, res)
})



export { routes }