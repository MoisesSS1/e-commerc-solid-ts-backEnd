import { ICartRepository } from "../../../repositories/ICartRepository";


export class DeleteItemCartUseCase {

    constructor(
        private cartRepository: ICartRepository
    ) {

    }


    async execute(idProduct: string, idUser: string) {

        const deleteItem = await this.cartRepository.deleteItem(idProduct, idUser)

    }

}