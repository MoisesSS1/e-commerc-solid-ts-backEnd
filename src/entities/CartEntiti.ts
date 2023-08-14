interface itemCart {
    idUser: string
    idProduct: string
    qtd: number
}

export class CartEntiti {
    idProduct
    idUser
    qtd

    constructor({ idUser, idProduct, qtd }: itemCart) {
        this.idUser = idUser
        this.qtd = qtd
        this.idProduct = idProduct
    }
}