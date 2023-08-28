import { IDelivery } from "../services/delivery/IDelivery";
import { CartEntiti } from "./CartEntiti";

export interface Order {
    number: number,
    total: number,
    infoItems: CartEntiti
    adress: IDelivery

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