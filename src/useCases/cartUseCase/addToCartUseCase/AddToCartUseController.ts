import { Request, Response } from "express";
import { AddToCartUseCase } from "./AddToCartUseCase";


export class AddToCartUseController {

    constructor(
        private AddToCardUseCase: AddToCartUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { _idProduct, _idUser, qtd } = request.body

        try {
            const addItem = await this.AddToCardUseCase.execute({ _idProduct, _idUser, qtd })
            return response.status(201).json({ message: "Produto adicionado ao carrinho!", data: addItem })
        } catch (error: any) {
            return response.status(400).json({ message: error.message })

        }

    }
}