import { MongoProductRepository } from "../../../repositories/implementations/mongoose/ProductRepository/MongoProductRepository";
import { ShowProductsController } from "./ShowProductsController";
import { ShowProductUseCase } from "./ShowProductsUseCase";

const productRepository = new MongoProductRepository()
const showProductsUseCase = new ShowProductUseCase(productRepository)
const showProductsController = new ShowProductsController(showProductsUseCase)

export { showProductsController, showProductsUseCase }