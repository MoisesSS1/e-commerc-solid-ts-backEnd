import { createOrderDTO } from "../../../../useCases/orderUseCase/createOrderUseCase/CreateOrderDTO";
import { IOrdersRepository } from "../../../IOrdersRepository";
import { OrdersDB } from "./OrdersSchema";

export class MongooseOrdersRepository implements IOrdersRepository {
    async lastOrder(): Promise<number> {
        const lastOrder = await OrdersDB.count()

        const qtd = Number(lastOrder)
        return qtd
    }

    async createOrder(order: createOrderDTO): Promise<any> {
        const saveOrder = await OrdersDB.create(order)

        return saveOrder
    }

    async showOrders(_idUser: string): Promise<any> {
        const orders = await OrdersDB.find({ "infoItems.idUser": _idUser })

        return orders

    }
}