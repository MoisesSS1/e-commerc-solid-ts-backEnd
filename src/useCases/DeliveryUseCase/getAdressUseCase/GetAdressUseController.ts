import { Request, Response } from "express";
import { GetAdressUseCase } from "./GetAdressUseCase";


export class GetAdressUseController {
    constructor(
        private getAdressUseCase: GetAdressUseCase
    ) {

    }

    async handle(request: Request, response: Response) {
        const { cep } = request.body

        try {
            const checkAdress = await this.getAdressUseCase.execute(cep)

            return response.status(200).json(checkAdress)

        } catch (error: any) {
            return response.status(400).json({ message: error.message })

        }

    }
}