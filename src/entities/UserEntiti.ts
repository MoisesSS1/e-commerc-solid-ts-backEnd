export interface User {
    _id: string,
    name: string,
    email: string,
    password: string
}

export class UserEntiti {
    name
    email
    password


    constructor({ name, email, password }: User) {

        this.email = email
        this.name = name
        this.password = password
    }
}