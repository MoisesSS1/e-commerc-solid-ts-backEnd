import { MongoUserRepository } from "../../../repositories/implementations/mongoose/MongoUserRepository";
import { Bcrypt } from "../../../services/password_encryption/Implementations/Bcrypt";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new MongoUserRepository()
const iencryptPassword = new Bcrypt()
const createUserUseCase = new CreateUserUseCase(userRepository, iencryptPassword)
const createUserController = new CreateUserController(createUserUseCase)


export { createUserController, createUserUseCase }