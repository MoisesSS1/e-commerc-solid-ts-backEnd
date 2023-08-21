import { AddToCartUseController } from "./AddToCartUseController";
import { AddToCartUseCase } from "./AddToCartUseCase";
import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository";
import { AuthJWT } from "../../../services/auth/implementations/AuthJwt";

const cartRepository = new MongooseCartRepository()
const authUser = new AuthJWT()
const addToCartUseCase = new AddToCartUseCase(cartRepository, authUser)
const addToCartUseController = new AddToCartUseController(addToCartUseCase, authUser)

export { addToCartUseCase, addToCartUseController }