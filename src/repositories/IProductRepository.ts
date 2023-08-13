import { ProductEntiti } from "../entities/ProductEntiti";

export interface IProductRepository {
    createProduct({ name, description, price, image, category }: ProductEntiti): Promise<any>
    showProducts(): Promise<any>
}