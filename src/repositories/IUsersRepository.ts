import { User } from "../entities/UserEntiti";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>
    save(user: User): Promise<void>
}
