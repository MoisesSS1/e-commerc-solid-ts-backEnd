import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";
import { IAuthUser } from "../../../services/auth/IAuthUser";
import { OrderEntiti } from "../../../entities/OrderEntiti";


export class CreateOrderUseController {
    constructor(
        private createOrderUseCase: CreateOrderUseCase,
        private authUser: IAuthUser
    ) {

    }

    async handle(request: Request, response: Response) {

        let { order } = request.body

        const dataToken = await this.authUser.ShowToken(request)

        //inclui id do usuario dentro de infoItem
        order.infoItems = { ...order.infoItems, idUser: dataToken._id }

        try {
            const createOrder = await this.createOrderUseCase.execute(order)

            return response.status(201).json({ message: "Pedido criado com sucesso!", createOrder })
        } catch (error: any) {
            return response.status(401).json({ message: error.message })
        }
    }
}