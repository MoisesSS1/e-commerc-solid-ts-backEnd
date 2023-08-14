import { ICartRepository } from "../../../repositories/ICartRepository";
import { addCartDTO } from "./AddToCartDTO";


export class AddToCartUseCase {

    constructor(
        private cartRepository: ICartRepository
    ) {

    }

    async execute({ _idProduct, _idUser, qtd }: addCartDTO) {

        const addItem = await this.cartRepository.addItemToCard({ _idProduct, _idUser, qtd })
        //CONNEXÃO COM DB PARA ADICIONAR ITEM 
        return addItem
    }
}