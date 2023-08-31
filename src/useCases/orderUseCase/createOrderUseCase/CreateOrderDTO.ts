import { ICart } from "../../../entities/CartEntiti"
import { IgetAdress } from "../../../services/delivery/IDelivery"


export interface createOrderDTO {
    total: number,
    infoItems: ICart
    adress: IgetAdress
}