import { Request } from "express"
import { getUserForTokenDTO } from "./implementations/getUserForTokenDTO"

export interface IAuthUser {

    GetToken(email: string, _id: string | undefined): Promise<string>
    GetUserForToken(token: string): Promise<getUserForTokenDTO | any>
    ShowToken(request: Request): Promise<any>

}