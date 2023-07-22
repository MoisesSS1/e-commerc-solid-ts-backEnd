import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";



const updateProductUseCase = new UpdateProductUseCase()
const updateProductController = new UpdateProductController(updateProductUseCase)

export { updateProductController, updateProductUseCase }