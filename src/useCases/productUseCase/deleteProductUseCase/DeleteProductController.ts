import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";



export class DeleteProductController {
    constructor(
        private DeleteProductUseCase: DeleteProductUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { _id } = request.params

        try {
            const deleteProduct = await this.DeleteProductUseCase.execute({ _id })

            return response.status(200).json({ message: "Produto excluido com sucesso!!!", _id: _id })
        } catch (error) {

            return response.status(401).json({ message: "Erro ao excluir o produto!!" })

        }

    }
}