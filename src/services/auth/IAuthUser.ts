import { User } from "../../entities/UserEntiti"

export interface IAuthUser {

    GetToken(email: string, _id?: string): Promise<string>
    GetUserForToken(token: string): Promise<string>

}