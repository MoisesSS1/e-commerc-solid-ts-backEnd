import { MongoProductRepository } from "../../../repositories/implementations/mongoose/ProductRepository/MongoProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const productRepository = new MongoProductRepository()
const createProductUseCase = new CreateProductUseCase(productRepository)
const createProductController = new CreateProductController(createProductUseCase)


export { createProductController, createProductUseCase }
