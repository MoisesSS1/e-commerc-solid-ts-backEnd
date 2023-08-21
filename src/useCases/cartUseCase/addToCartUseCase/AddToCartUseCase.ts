import { ICartRepository } from "../../../repositories/ICartRepository";
import { IAuthUser } from "../../../services/auth/IAuthUser";

export class AddToCartUseCase {

    constructor(
        private cartRepository: ICartRepository,
        private authUser: IAuthUser
    ) {

    }

    async execute({ idUser, idProduct, qtd }: any) {

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