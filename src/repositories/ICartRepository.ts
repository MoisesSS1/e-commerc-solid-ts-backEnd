import { addCartDTO } from "../useCases/cartUseCase/addToCartUseCase/AddToCartDTO";

export interface ICartRepository {
    addItemToCart({ idUser, idProduct, qtd }: addCartDTO): Promise<any>
    showItemsCart(idUser: string): Promise<any>
    deleteItem(idUser: string, idProduct: string): Promise<any>
}