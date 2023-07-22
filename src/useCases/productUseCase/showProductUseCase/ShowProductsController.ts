import { Request, Response } from "express";
import { ShowProductUseCase } from "./ShowProductsUseCase";



export class ShowProductsController {

    constructor(
        private ShowProductUseCase: ShowProductUseCase
    ) {

    }

    async handle(request: Request, response: Response) {
        try {
            const showProducts = await this.ShowProductUseCase.execute()
            return response.status(200).json({ data: showProducts })

        } catch (error) {
            return response.status(400).json({ message: "Erro ao buscar produtos no banco!!" })
        }
    }
}