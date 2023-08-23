import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository";
import { AuthJWT } from "../../../services/auth/implementations/AuthJwt";
import { DeleteItemCartUseCase } from "./DeleteItemCartUseCase";
import { DeleteItemCartUseController } from "./DeleteItemCartUseController";

const auth = new AuthJWT()
const cartRepository = new MongooseCartRepository()
const deleteItemCartUseCase = new DeleteItemCartUseCase(cartRepository)
const deleteItemCartUseController = new DeleteItemCartUseController(deleteItemCartUseCase, auth)

export { cartRepository, deleteItemCartUseCase, deleteItemCartUseController }
