import { MongoUserRepository } from "../../../repositories/implementations/mongoose/UserRepository/MongoUserRepository";
import { Bcrypt } from "../../../services/password_encryption/Implementations/Bcrypt";
import { CreateUserUseController } from "./CreateUserUseController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new MongoUserRepository()
const iencryptPassword = new Bcrypt()
const createUserUseCase = new CreateUserUseCase(userRepository, iencryptPassword)
const createUserUseController = new CreateUserUseController(createUserUseCase)


export { createUserUseController, createUserUseCase }