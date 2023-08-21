import { IAuthUser } from "../IAuthUser"
import { auth } from "./config"
import jwt from "jsonwebtoken"


export class AuthJWT implements IAuthUser {

    async GetToken(email: string, _id?: string | undefined): Promise<string> {
        const token = await jwt.sign(email, auth.secret)
        return token
    }

    async GetUserForToken(token: string): Promise<any> {
        const data = await jwt.verify(token, auth.secret)
        return data
    }

}
