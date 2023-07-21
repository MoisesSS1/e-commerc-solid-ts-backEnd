interface admin {
    _id: string,
    email: string,
    password: string
}

export class AdminEntiti {
    _id
    email
    password

    constructor({ _id, email, password }: admin) {
        this._id = _id
        this.email = email
        this.password = password
    }

}