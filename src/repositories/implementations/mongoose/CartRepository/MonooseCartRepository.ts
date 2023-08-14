import { CartEntiti } from "../../../../entities/CartEntiti";
import { ICartRepository } from "../../../ICartRepository";
import { CartDB } from "./CartSchema";

export class MongooseCartRepository implements ICartRepository {
    async addItemToCard({ _idProduct, _idUser, qtd }: CartEntiti): Promise<any> {

        const item = {
            _idProduct,
            _idUser,
            qtd
        }

        const checkItem: any = await CartDB.find({ _idProduct, _idUser })

        if (!checkItem[0]) {
            const addItem = await CartDB.insertMany(item)
            return
        }

        if (checkItem[0].qtd === item.qtd) {
            throw new Error("Item já foi adicionado, vá ao carrinho para alterar a quantidade!")
        }

        const addQtdItem = await CartDB.findOneAndReplace({ _idProduct, _idUser }, item)
        return
    }
}