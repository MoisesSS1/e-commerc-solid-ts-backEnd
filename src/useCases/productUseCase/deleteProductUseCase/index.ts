import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";



const deleteProductUseCase = new DeleteProductUseCase()
const deleteProductController = new DeleteProductController(deleteProductUseCase)


export { deleteProductController, deleteProductUseCase }