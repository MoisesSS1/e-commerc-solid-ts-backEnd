import { AddToCartUseController } from "./AddToCartUseController";
import { AddToCartUseCase } from "./AddToCartUseCase";
import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository";

const cartRepository = new MongooseCartRepository()
const addToCartUseCase = new AddToCartUseCase(cartRepository)
const addToCartUseController = new AddToCartUseController(addToCartUseCase)

export { addToCartUseCase, addToCartUseController }