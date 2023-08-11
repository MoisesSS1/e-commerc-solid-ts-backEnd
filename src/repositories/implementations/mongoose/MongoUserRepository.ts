import { User } from "../../../entities/UserEntiti";
import { IUsersRepository } from "../../IUsersRepository";
import { UserDB } from "./UserSchema";

export class MongoUserRepository implements IUsersRepository {


    async findByEmail(email: string): Promise<any> {

        const checkUser = await UserDB.find({ email: email })

        const user = checkUser.toString()

        return user
    }

    async save(user: User): Promise<void> {
        const saveUser = await UserDB.create(user)
    }
}