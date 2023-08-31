import { IgetAdress } from "../services/delivery/IDelivery";

export interface Order {
    number: number,
    total: number,
    infoItems: {
        idUser: string,
        idsProducts: [{
            idProduct: string,
            qtd: number
        }
        ]
    }

    adress: IgetAdress

}

export class OrderEntiti {
    number
    total
    infoItems
    adress

    constructor({ number, total, infoItems, adress }: Order) {


        if (!number || !total || !infoItems || !adress) {
            throw new Error("Erro ao criar pedido, tente mais tarde!")
        }
        this.number = number
        this.total = total
        this.infoItems = infoItems
        this.adress = adress

    }


}