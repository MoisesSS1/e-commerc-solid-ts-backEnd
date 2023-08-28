import { OrderEntiti } from "../../../entities/OrderEntiti";
import { IOrdersRepository } from "../../../repositories/IOrdersRepository";
import { createOrderDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
    constructor(
        private ordersRepository: IOrdersRepository
    ) {

    }

    async execute(order: createOrderDTO) {

        console.log(order)

        //busca o ultimo pedido no banco
        const lastOrder = await this.ordersRepository.lastOrder()

        //incluir +1 no ultimo pedido e adiciona ao objeto para ser salvo
        const numberOrderAdd = Number(lastOrder) + 1
        console.log(lastOrder)
        const dataOrder = {
            number: numberOrderAdd,
            ...order
        }

        //cria entidade order
        const createOrder = new OrderEntiti(dataOrder)

        //salva entidade order
        const saveOrder = await this.ordersRepository.createOrder(createOrder)

        return

    }
}