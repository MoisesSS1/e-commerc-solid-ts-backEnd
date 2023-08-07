import { AddToCartUseController } from "./AddToCartUseController";
import { AddToCartUseCase } from "./addToCartUseCase";

const addToCartUseCase = new AddToCartUseCase()
const addToCartUseController = new AddToCartUseController(addToCartUseCase)

export { addToCartUseCase, addToCartUseController }