import { auth } from "./config"
import jwt from "jsonwebtoken"
import { LoginUserDTO } from "../../useCases/userUseCase/LoginUserUseCase/LoginUserDTO"

export function GetToken(email: string, _id: string) {

    const token = jwt.sign(email, auth.secret)
    //devolve o token se for verdadeiro

    return token
} 
