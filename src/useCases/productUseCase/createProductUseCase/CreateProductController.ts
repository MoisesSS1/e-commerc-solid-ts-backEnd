import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";


export class CreateProductController {

    constructor(
        private CreateProductUseCase: CreateProductUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { name, price, description, image, category } = request.body

        try {
            const newProduct = await this.CreateProductUseCase.execute({ name, price, description, image, category })

            return response.status(201).json({ message: "Produto criado com sucesso!", data: newProduct })

        } catch (error: any) {

            return response.status(400).json({ message: error.message })
        }

    }
}