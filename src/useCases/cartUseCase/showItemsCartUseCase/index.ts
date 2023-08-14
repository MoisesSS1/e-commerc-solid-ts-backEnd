import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository"
import { ShowItemCartUseCase } from "./showItemCartUseCase"
import { ShowCartUseController } from "./showItemCartUseController"

const cartRepository = new MongooseCartRepository()
const showItemCartUseCase = new ShowItemCartUseCase(cartRepository)
const showCartUseController = new ShowCartUseController(showItemCartUseCase)

export { showCartUseController, showItemCartUseCase }