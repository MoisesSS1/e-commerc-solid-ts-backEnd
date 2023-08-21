import { ICartRepository } from "../../../repositories/ICartRepository";
import { addCartDTO } from "./AddToCartDTO";


export class AddToCartUseCase {

    constructor(
        private cartRepository: ICartRepository
    ) {

    }

    async execute({ idUser, idProduct, qtd }: addCartDTO) {

        const data = {
            idUser,
            idProduct,
            qtd
        }

        const addItem = await this.cartRepository.addItemToCart(data)
        //CONNEXÃO COM DB PARA ADICIONAR ITEM 
        return addItem
    }
}