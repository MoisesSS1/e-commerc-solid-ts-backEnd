interface itemCart {
    _idUser: string
    _idProduct: string
    qtd: number
}

export class CartEntiti {
    _idProduct
    _idUser
    qtd

    constructor({ _idUser, _idProduct, qtd }: itemCart) {
        this._idUser = _idUser
        this.qtd = qtd
        this._idProduct = _idProduct
    }
}