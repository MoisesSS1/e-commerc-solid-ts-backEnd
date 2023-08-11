export interface User {
    _id?: string
    name: string,
    email: string,
    password: string
}

export class UserEntiti {
    name
    email
    password


    constructor({ name, email, password }: User) {

        if (!name || !email || !password || name.length < 3 || email.length < 6 || password.length < 6) {
            throw new Error("Preencha os dados corretamente!")
        }
        this.email = email
        this.name = name
        this.password = password
    }
}