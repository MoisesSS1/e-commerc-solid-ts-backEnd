import { Request, Response } from "express";
import { AddToCartUseCase } from "./AddToCartUseCase";


export class AddToCartUseController {

    constructor(
        private AddToCardUseCase: AddToCartUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { _id, qtd } = request.body

        try {
            const dataSave = await this.AddToCardUseCase.execute({ _id, qtd })
            return response.status(201).json({ message: "Produto adicionado ao carrinho!", data: dataSave })
        } catch (error) {
            return response.status(400).json({ message: "Erro ao adicionar produto ao carrinho!" })

        }

    }
}