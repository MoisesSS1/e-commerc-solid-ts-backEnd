import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";


export class CreateAdminController {

    constructor(
        private CreateAdminUseCase: CreateAdminUseCase
    ) {

    }

    async handle(request: Request, response: Response) {

        const { email, password } = request.body

        try {
            const adminCreate = await this.CreateAdminUseCase.execute({ email, password })
            return response.status(201).json({ message: "Usuário criado com sucesso!", data: adminCreate })

        } catch (error) {
            return response.status(401).json({ message: "Erro ao criar usuário!" })
        }
    }
}