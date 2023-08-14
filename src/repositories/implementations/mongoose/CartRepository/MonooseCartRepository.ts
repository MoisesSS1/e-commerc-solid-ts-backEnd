import { CartEntiti } from "../../../../entities/CartEntiti";
import { ICartRepository } from "../../../ICartRepository";
import { CartDB } from "./CartSchema";

export class MongooseCartRepository implements ICartRepository {

    async addItemToCart({ idProduct, idUser, qtd }: CartEntiti): Promise<any> {

        const item = {
            idProduct,
            idUser,
            qtd
        }

        const checkItem: any = await CartDB.find({ idProduct, idUser })

        if (!checkItem[0]) {
            const addItem = await CartDB.insertMany(item)
            return
        }

        if (checkItem[0].qtd === item.qtd) {
            throw new Error("Item já foi adicionado, vá ao carrinho para alterar a quantidade!")
        }

        const addQtdItem = await CartDB.findOneAndReplace({ idProduct, idUser }, item)
        return
    }

    async showItemsCart(idUser: string): Promise<any> {

        const itemsCart = await CartDB.find({ idUser: idUser })

        console.log(itemsCart)
        return itemsCart
    }
}