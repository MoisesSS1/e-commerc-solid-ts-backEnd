import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository"
import { MongoUserRepository } from "../../../repositories/implementations/mongoose/UserRepository/MongoUserRepository"
import { AuthJWT } from "../../../services/auth/implementations/AuthJwt"
import { ShowItemCartUseCase } from "./showItemCartUseCase"
import { ShowCartUseController } from "./showItemCartUseController"

const cartRepository = new MongooseCartRepository()
const userRepository = new MongoUserRepository()
const authUser = new AuthJWT()
const showItemCartUseCase = new ShowItemCartUseCase(cartRepository, authUser, userRepository)
const showCartUseController = new ShowCartUseController(showItemCartUseCase)

export { showCartUseController, showItemCartUseCase }