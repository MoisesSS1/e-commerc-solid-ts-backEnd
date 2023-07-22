import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";



export class UpdateProductController {

    constructor(
        private UpdateProductUseCase: UpdateProductUseCase
    ) {

    }


    async handle(request: Request, response: Response) {

        const { _id, name, description, price, image } = request.body

        try {
            const updateProduct = await this.UpdateProductUseCase.execute({ _id, name, price, description, image })
            return response.status(200).json({ message: "Produto atualizado com sucesso!", data: updateProduct })

        } catch (error) {
            return response.status(400).json({ message: "Erro ao atualizar o produto!" })
        }

    }

}