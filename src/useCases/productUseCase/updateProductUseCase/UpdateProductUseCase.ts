import { UpdateProductDTO } from "./UpdateProductDTO";



export class UpdateProductUseCase {

    async execute({ _id, name, description, price, image }: UpdateProductDTO) {

        //db salvar produto
        const saveProduct = await {
            _id,
            name,
            price,
            description,
            image
        }

        return saveProduct

    }
}