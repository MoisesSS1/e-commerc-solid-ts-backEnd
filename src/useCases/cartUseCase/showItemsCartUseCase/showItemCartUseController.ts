import { Request, Response } from "express";
import { ShowItemCartUseCase } from "./showItemCartUseCase";


export class ShowCartUseController {
    constructor(
        private showItemCartUseCase: ShowItemCartUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        try {
            const { idUser } = request.body
            const itemsCart = await this.showItemCartUseCase.execute(idUser)
            return response.status(200).json({ data: itemsCart })
        } catch (error: any) {

            return response.status(400).json({ message: error.message })

        }
    }
}