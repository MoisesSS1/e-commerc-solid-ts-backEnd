import { MongoUserRepository } from "../../../repositories/implementations/mongoose/MongoUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new MongoUserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase)


export { createUserController, createUserUseCase }