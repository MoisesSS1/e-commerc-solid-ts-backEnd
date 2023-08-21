import { Request, Response } from "express";
import { ShowItemCartUseCase } from "./showItemCartUseCase";


export class ShowCartUseController {
    constructor(
        private showItemCartUseCase: ShowItemCartUseCase
    ) {

    }

    async handle(request: Request, response: Response) {


        try {
            const { authorization } = await request.headers
            if (authorization) {
                const token = authorization.replace("Bearer ", "")
                const itemsCart = await this.showItemCartUseCase.execute(token)
                return response.status(200).json({ data: itemsCart })
            }
            throw new Error("Erro ao buscar token")


        } catch (error: any) {

            return response.status(400).json({ message: error.message })

        }
    }
}