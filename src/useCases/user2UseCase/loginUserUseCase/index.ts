import { MongoUserRepository } from "../../../repositories/implementations/mongoose/UserRepository/MongoUserRepository";
import { AuthJWT } from "../../../services/auth/implementations/AuthJwt";
import { Bcrypt } from "../../../services/password_encryption/Implementations/Bcrypt";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { LoginUserUseController } from "./LoginUserUseController";

const userRepository = new MongoUserRepository()
const encryptPassword = new Bcrypt()
const authUser = new AuthJWT()
const loginUserUseCase = new LoginUserUseCase(userRepository, encryptPassword, authUser)
const loginUserUseController = new LoginUserUseController(loginUserUseCase)

export { loginUserUseCase, loginUserUseController }