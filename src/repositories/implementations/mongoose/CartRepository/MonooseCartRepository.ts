import { addCartDTO } from "../../../../useCases/cartUseCase/addToCartUseCase/AddToCartDTO";
import { ICartRepository } from "../../../ICartRepository";
import { ProductDB } from "../ProductRepository/ProductSchema";
import { CartDB } from "./CartSchema";

export class MongooseCartRepository implements ICartRepository {

    async addItemToCart({ idUser, idProduct, qtd }: addCartDTO): Promise<any> {

        //se usuário não tiver um carrinho, ele o cria e adiciona o item
        const checkCart: any = await CartDB.find({ idUser: idUser })//checa se tem carrinho
        if (!checkCart[0]) {
            const createCart = {
                idUser,
                idsProducts: [{
                    idProduct,
                    qtd
                }
                ]
            }

            const addItemInCart: any = await CartDB.insertMany(createCart)
            return
        }

        //checa se o item já está no carrinho, caso esteja, atualiza a qtd
        const checkItemAndUpdateQtd = await CartDB.updateOne(
            { idUser: idUser, "idsProducts.idProduct": idProduct }, { $set: { "idsProducts.$": [{ "idProduct": idProduct, "qtd": qtd }] } }

        )

        //item não está no carrinho - adiciona o item no carrinho
        if (!checkItemAndUpdateQtd.matchedCount) {
            const itemAdd = {
                idProduct,
                qtd
            }
            const addItemInCart = await CartDB.updateOne({ idUser: idUser }, { $push: { idsProducts: { idProduct, qtd } } })
        }
        return
    }

    async showItemsCart(idUser: string): Promise<any> {
        //puxa carrinho do banco, idUser + id dos produtos
        const CartData: any = await CartDB.find({ idUser: idUser }).lean()

        //cria um array com os ids dos produtos
        let ids = await CartData[0].idsProducts.map((item: any) => {
            return item.idProduct
        })

        //busca os itens do carrinho na coleção de produtos
        const productsCart = await ProductDB.find({ "_id": { $in: [...ids] } }).lean()

        var dataReturn = <any>[];

        //bate o id do item e a qtd e junta em um unico obj
        const filter = await productsCart.map((product) => {
            const product1 = CartData[0].idsProducts.map((item: any) => {
                if (item.idProduct.toString() == product._id.toString()) {
                    //inserir qtd no objecto
                    dataReturn.push({ ...product, qtd: item.qtd })

                    return
                }
            })
            return product1
        })

        return dataReturn
    }

    async deleteItem(idUser: string, idProduct: string): Promise<any> {

        const chekItemExistInCart = await CartDB.updateOne({ idUser, "idsProducts.idProduct": idProduct }, { $pull: { "idsProducts": { idProduct } } })

        if (chekItemExistInCart.modifiedCount === 0) {
            throw new Error("Produto não esta no carrinho!")
        }


    }
}