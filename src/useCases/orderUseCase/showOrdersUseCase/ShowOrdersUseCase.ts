import { IOrdersRepository } from "../../../repositories/IOrdersRepository";

export class ShowOrdersUseCase {

    constructor(
        private ordersRepository: IOrdersRepository
    ) {

    }


    async execute(_idUser: string) {

        const orders = await this.ordersRepository.showOrders(_idUser)

        return orders
    }
}