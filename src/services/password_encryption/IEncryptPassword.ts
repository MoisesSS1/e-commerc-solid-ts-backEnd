export interface IEncryptPassword {
    createHashUser(password: string): Promise<string>

    checkUser(password: string, hashDB: string): Promise<boolean>
}