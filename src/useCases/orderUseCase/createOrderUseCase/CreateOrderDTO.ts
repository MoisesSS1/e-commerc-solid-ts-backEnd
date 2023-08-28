import { CartEntiti } from "../../../entities/CartEntiti"
import { IDelivery } from "../../../services/delivery/IDelivery"


export interface createOrderDTO {
    total: number,
    infoItems: CartEntiti
    adress: IDelivery
}