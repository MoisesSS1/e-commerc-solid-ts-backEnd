import { IAuthUser } from "../IAuthUser"
import { auth } from "./config"
import jwt from "jsonwebtoken"
import { getUserForTokenDTO } from "./getUserForTokenDTO"
import { Request } from "express"



export class AuthJWT implements IAuthUser {

    async GetToken(email: string, _id: string): Promise<string> {
        const token = await jwt.sign({ _id: _id, email: email }, auth.secret)
        return token
    }

    async GetUserForToken(token: string): Promise<getUserForTokenDTO | any> {
        const data = await jwt.verify(token, auth.secret)
        return data
    }

    async ShowToken(request: Request): Promise<any> {


        const token: any = await request.headers.authorization?.replace("Bearer ", "").toString()

        const dataToken = await jwt.verify(token, auth.secret)

        return dataToken

    }

}
