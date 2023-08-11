import { MongoUserRepository } from "../../../repositories/implementations/mongoose/MongoUserRepository";
import { Bcrypt } from "../../../services/password_encryption/Implementations/Bcrypt";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { LoginUserUseController } from "./LoginUserUseController";

const userRepository = new MongoUserRepository()
const encryptPassword = new Bcrypt()
const loginUserUseCase = new LoginUserUseCase(userRepository, encryptPassword)
const loginUserUseController = new LoginUserUseController(loginUserUseCase)

export { loginUserUseCase, loginUserUseController }