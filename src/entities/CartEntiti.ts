export interface itemCart {
    idProduct: string,
    qtd: number
}

interface Cart {
    idUser: string,
    idsProducts: [{
        idProduct: string,
        qtd: number
    }
    ]
}


export class CartEntiti {
    idUser
    idsProducts

    constructor({ idUser, idsProducts }: Cart) {
        this.idUser = idUser
        this.idsProducts = idsProducts
    }
}