import { Request, Response } from "express";
import { AddToCartUseCase } from "./AddToCartUseCase";
import { IAuthUser } from "../../../services/auth/IAuthUser";


export class AddToCartUseController {

    constructor(
        private AddToCardUseCase: AddToCartUseCase,
        private authUser: IAuthUser
    ) {

    }

    async handle(request: Request, response: Response) {

        const { idProduct, qtd } = request.body
        const token: any = await this.authUser.ShowToken(request)
        const idUser = token._id

        try {
            const addItem = await this.AddToCardUseCase.execute({ idUser, idProduct, qtd })

            return response.status(201).json({ message: "Produto adicionado ao carrinho!", data: addItem })
        } catch (error: any) {
            return response.status(400).json({ message: error.message })

        }

    }
}