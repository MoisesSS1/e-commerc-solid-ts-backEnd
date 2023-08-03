import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { auth } from "../../services/auth/config";

export async function CheckToken(request: Request, response: Response, next: NextFunction) {

    const token: any = await request.headers.authorization?.replace("Bearer ", "").toString()


    try {
        const checkToken = await jwt.verify(token, auth.secret)
        console.log(checkToken)
        next()

    } catch (error) {
        return response.status(401).json({ message: "Erro ao validar token, logue e tente novamente!" })
    }
}