import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";


const createProductUseCase = new CreateProductUseCase()
const createProductController = new CreateProductController(createProductUseCase)


export { createProductController, createProductUseCase }
