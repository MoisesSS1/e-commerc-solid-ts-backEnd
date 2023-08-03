import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";


export class LoginUserUseController {
    constructor(
        private LoginUserUseCase: LoginUserUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const user = request.body

        try {
            const checkPass = await this.LoginUserUseCase.execute(user)

            if (checkPass) {
                return response.status(200).json({ message: "Usuário logado com sucesso!", data: checkPass })

            } else {
                return response.status(200).json({ message: "E-mail ou senha incorretos!" })
            }


        } catch (error) {

            return response.status(400).json({ message: "Erro ao logar, tente novamente!" })

        }

    }
}