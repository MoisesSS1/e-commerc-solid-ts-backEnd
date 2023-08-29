import { OrderEntiti } from "../../../entities/OrderEntiti";
import { ICartRepository } from "../../../repositories/ICartRepository";
import { IOrdersRepository } from "../../../repositories/IOrdersRepository";
import { createOrderDTO } from "./CreateOrderDTO";

export class CreateOrderUseCase {
    constructor(
        private ordersRepository: IOrdersRepository,
        private cartRepository: ICartRepository
    ) {

    }

    async execute(order: createOrderDTO) {

        //busca o ultimo pedido no banco
        const lastOrder = await this.ordersRepository.lastOrder()

        //incluir +1 no ultimo pedido e adiciona ao objeto para ser salvo
        const numberOrderAdd = Number(lastOrder) + 1
        const dataOrder = {
            number: numberOrderAdd,
            ...order
        }

        //cria entidade order
        const createOrder = new OrderEntiti(dataOrder)

        //salva entidade order
        const saveOrder = await this.ordersRepository.createOrder(createOrder)


        //se salvar com sucesso, limpar itens do carrinho
        const deleteItemsCart = await this.cartRepository.clearCart(order.infoItems.idUser)



        return

    }
}