import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
    constructor(
        private CreateUserUseCase: CreateUserUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { name, email, password } = request.body

        try {
            const createUser = await this.CreateUserUseCase.execute({ name, email, password })

            return response.status(201).json({ message: "Usuário criado com sucesso!", data: createUser })
        } catch (error) {
            return response.status(201).json({ message: "Erro ao criar conta, tente novamente!!" })

        }
    }
}