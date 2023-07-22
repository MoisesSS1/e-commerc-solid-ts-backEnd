import { ShowProductsController } from "./ShowProductsController";
import { ShowProductUseCase } from "./ShowProductsUseCase";


const showProductsUseCase = new ShowProductUseCase()
const showProductsController = new ShowProductsController(showProductsUseCase)


export { showProductsController, showProductsUseCase }