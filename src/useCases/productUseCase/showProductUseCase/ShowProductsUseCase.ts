import { IProductRepository } from "../../../repositories/IProductRepository";


export class ShowProductUseCase {

    constructor(
        private productRepository: IProductRepository
    ) { }

    async execute() {

        const showProducts = await this.productRepository.showProducts()

        return showProducts
    }
}