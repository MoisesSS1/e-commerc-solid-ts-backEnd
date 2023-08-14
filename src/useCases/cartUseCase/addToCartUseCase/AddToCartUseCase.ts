import { ICartRepository } from "../../../repositories/ICartRepository";
import { addCartDTO } from "./AddToCartDTO";


export class AddToCartUseCase {

    constructor(
        private cartRepository: ICartRepository
    ) {

    }

    async execute({ idProduct, idUser, qtd }: addCartDTO) {

        const addItem = await this.cartRepository.addItemToCart({ idProduct, idUser, qtd })
        //CONNEXÃO COM DB PARA ADICIONAR ITEM 
        return addItem
    }
}