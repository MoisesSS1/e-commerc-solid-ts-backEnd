import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { name, email, password } = request.body

        try {
            const createUser = await this.createUserUseCase.execute({ name, email, password })

            return response.status(201).json({ message: "Usuário criado com sucesso!", data: createUser })
        } catch (err: any) {
            return response.status(404).json({ message: err.message })
        }
    }
}