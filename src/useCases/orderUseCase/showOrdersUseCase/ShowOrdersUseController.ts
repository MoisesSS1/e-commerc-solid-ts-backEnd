import { Request, Response } from "express";
import { ShowOrdersUseCase } from "./ShowOrdersUseCase";
import { IAuthUser } from "../../../services/auth/IAuthUser";

export class ShowOrdersUseController {
    constructor(
        private showOrderUseCase: ShowOrdersUseCase,
        private auth: IAuthUser
    ) {

    }

    async handle(request: Request, response: Response) {

        try {

            const dataToken = await this.auth.ShowToken(request)

            const orders = await this.showOrderUseCase.execute(dataToken._id)

            return response.status(200).json({ orders: orders })

        } catch (error) {

            return response.status(401).json("Erro ao procurar os pedidos!")

        }

    }
}