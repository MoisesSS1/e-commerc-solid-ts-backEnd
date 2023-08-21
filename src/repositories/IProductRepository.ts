import { CartEntiti } from "../entities/CartEntiti";
import { ProductEntiti } from "../entities/ProductEntiti";

export interface IProductRepository {
    createProduct({ name, description, price, image, category }: ProductEntiti): Promise<any>
    showProducts(): Promise<any>
    showItemsCard(idsCart: CartEntiti): Promise<any>
}