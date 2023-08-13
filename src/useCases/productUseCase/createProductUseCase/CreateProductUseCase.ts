import { ProductEntiti } from "../../../entities/ProductEntiti";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { CreateProductDTO } from "./CreateProductDTO";


export class CreateProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ) { }

    async execute({ name, price, description, image, category }: CreateProductDTO) {

        const newProduct = await new ProductEntiti({ name, price, description, image, category })
        const saveProduct = await this.productRepository.createProduct(newProduct)
        return saveProduct
    }
}