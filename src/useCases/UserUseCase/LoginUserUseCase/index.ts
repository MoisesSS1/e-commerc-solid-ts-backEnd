import { LoginUserUseCase } from "./LoginUserUseCase";
import { LoginUserUseController } from "./LoginUserUseController";

const loginUserUseCase = new LoginUserUseCase()
const loginUserUseController = new LoginUserUseController(loginUserUseCase)

export { loginUserUseCase, loginUserUseController }