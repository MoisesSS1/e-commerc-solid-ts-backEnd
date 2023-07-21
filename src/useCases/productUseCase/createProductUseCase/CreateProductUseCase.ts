import { ProductEntiti } from "../../../entities/ProductEntiti";
import { CreateProductDTO } from "./CreateProductDTO";


export class CreateProductUseCase {

    async execute({ name, price, description, image }: CreateProductDTO) {

        //gerar o _id de forma aleatória, preferencia modular, metodo utilizado em outros lugares
        const _id = "id do produto"

        const newProduct = await new ProductEntiti({ _id, name, price, description, image })

        return newProduct

    }
}