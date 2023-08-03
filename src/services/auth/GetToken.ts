import { auth } from "./config"
import jwt from "jsonwebtoken"
import { LoginUserDTO } from "../../useCases/userUseCase/LoginUserUseCase/LoginUserDTO"

export function GetToken({ email, password }: LoginUserDTO) {

    const userApp = { email, password }
    //recupera as informações de nome e senha do db
    const userDB = { email: "moises@moises", password: "kb23ij45" }


    //checa se nome e senha do db é o mesmo 
    let checkUser;
    if (userApp.email == userDB.email && userApp.password == userDB.password) {

        checkUser = true
    } else {
        checkUser = false
    }

    //devolve o token se forem iguais, e false se não forem
    if (checkUser) {

        const token = jwt.sign({ userDB }, auth.secret)
        //devolve o token se for verdadeiro

        return token
    }

    //caso nome e senha não batam
    return false
} 
