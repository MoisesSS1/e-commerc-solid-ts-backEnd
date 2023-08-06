interface itemCart {
    _id: string
    qtd: number
}

export class CartEntiti {
    _id
    qtd

    constructor({ _id, qtd }: itemCart) {
        this._id = _id
        this.qtd = qtd
    }
}