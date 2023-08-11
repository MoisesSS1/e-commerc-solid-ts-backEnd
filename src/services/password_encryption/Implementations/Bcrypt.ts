import bcrypt from "bcrypt";
import { IEncryptPassword } from "../IEncryptPassword";


export class Bcrypt implements IEncryptPassword {
    async createHashUser(password: string): Promise<string> {
        const hash = await bcrypt.hash(password, 12)
        return hash

    }

    async checkUser(password: string, hashDB: string): Promise<boolean> {
        const compare = await bcrypt.compare(password, hashDB)
        return compare
    }
}
