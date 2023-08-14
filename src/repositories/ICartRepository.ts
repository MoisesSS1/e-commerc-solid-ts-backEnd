import { CartEntiti } from "../entities/CartEntiti";

export interface ICartRepository {
    addItemToCart({ idProduct, idUser, qtd }: CartEntiti): Promise<any>
    showItemsCart(idUser: string): Promise<any>
}