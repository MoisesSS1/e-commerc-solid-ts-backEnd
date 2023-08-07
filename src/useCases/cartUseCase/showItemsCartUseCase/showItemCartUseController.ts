import { Request, Response } from "express";
import { ShowItemCartUseCase } from "./showItemCartUseCase";


export class ShowCartUseController {
    constructor(
        private showItemCartUseCase: ShowItemCartUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        try {
            const itemsCart = await this.showItemCartUseCase.execute()
            return response.status(200).json({ data: itemsCart })
        } catch (error) {

            return response.status(400).json({ message: "Erro ao buscar items do carrinho!" })

        }
    }
}