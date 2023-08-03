import { NextFunction, Request, Response } from "express"
import { auth } from "./config"
import jwt from "jsonwebtoken"
import { UserEntiti } from "../../entities/UserEntiti"

interface User {
    email: string,
    password: string
}

export function GetToken({ email, password }: UserEntiti) {

    //recupera as informações de nome e senha do db
    const user = { email: "moises@moises", password: "kb23ij45" }

    //checa se nome e senha do db é o mesmo 
    const checkUser = true

    if (checkUser) {

        const token = jwt.sign({ user }, auth.secret)
        //devolve o token se for verdadeiro
    }




} 
