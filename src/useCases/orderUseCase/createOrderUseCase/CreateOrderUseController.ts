import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";


export class CreateOrderUseController {
    constructor(
        private createOrderUseCase: CreateOrderUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { order } = request.body

        try {

            const createOrder = await this.createOrderUseCase.execute(order)

            return response.status(201).json({ message: "Pedido criado com sucesso!" })

        } catch (error: any) {
            return response.status(401).json({ message: error.message })
        }
    }
}