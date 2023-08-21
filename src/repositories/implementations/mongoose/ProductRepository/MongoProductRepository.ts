import { CartEntiti } from "../../../../entities/CartEntiti";
import { ProductEntiti } from "../../../../entities/ProductEntiti";
import { IProductRepository } from "../../../IProductRepository";
import { ProductDB } from "./ProductSchema";

export class MongoProductRepository implements IProductRepository {

    async createProduct({ name, description, price, image, category }: ProductEntiti): Promise<any> {
        const product = { name, description, price, image, category }
        const saveProduct = await ProductDB.create(product)

        return saveProduct
    }

    async showProducts(): Promise<any> {
        const findProducts = await ProductDB.find()
        return findProducts
    }

    async showItemsCard(idsCart: CartEntiti): Promise<any> {

        // const findProducts = await ProductDB.find({ idProduct: { $in: [idsCart.idsProducts] } })


    }
}