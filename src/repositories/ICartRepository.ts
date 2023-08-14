import { CartEntiti } from "../entities/CartEntiti";

export interface ICartRepository {
    addItemToCard({ _idProduct, _idUser, qtd }: CartEntiti): Promise<any>
}