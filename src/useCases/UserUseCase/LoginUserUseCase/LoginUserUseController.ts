import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";


export class LoginUserUseController {
    constructor(
        private loginUserUseCase: LoginUserUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const user = request.body

        try {
            const checkPass = await this.loginUserUseCase.execute(user)
            if (checkPass) {
                return response.status(200).json({ message: "Usuário logado com sucesso!", data: checkPass })

            } else {
                return response.status(200).json({ message: "E-mail ou senha incorreto!", data: "err" })
            }

        } catch (err: any) {
            return response.status(400).json({ message: err.message })
        }

    }
}