export interface IAuthUser {

    GetToken(email: string, _id?: string): Promise<string>

}