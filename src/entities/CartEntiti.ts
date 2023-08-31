export interface itemCart {
    idProduct: string,
    qtd: number
}

export interface ICart {
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

    constructor({ idUser, idsProducts }: ICart) {
        this.idUser = idUser
        this.idsProducts = idsProducts
    }
}