import { addCartDTO } from "../useCases/cartUseCase/addToCartUseCase/AddToCartDTO";

export interface ICartRepository {
    addItemToCart({ idProduct, qtd }: addCartDTO): Promise<any>
    showItemsCart(idUser: string): Promise<any>
}