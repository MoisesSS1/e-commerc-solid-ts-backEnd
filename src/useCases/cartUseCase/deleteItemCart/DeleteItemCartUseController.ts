import { Request, Response } from "express";
import { DeleteItemCartUseCase } from "./DeleteItemCartUseCase";
import { IAuthUser } from "../../../services/auth/IAuthUser";


export class DeleteItemCartUseController {
    constructor(
        private deleteItemCartUseCase: DeleteItemCartUseCase,
        private auth: IAuthUser
    ) {

    }

    async handle(request: Request, response: Response) {

        const { idProduct } = request.body
        const idUser: any = await this.auth.ShowToken(request)

        try {
            await this.deleteItemCartUseCase.execute(idUser._id, idProduct)
            return response.status(200).json({ message: "Produto exluido!" })

        } catch (error: any) {
            return response.status(200).json({ message: error.message })
        }
    }
}