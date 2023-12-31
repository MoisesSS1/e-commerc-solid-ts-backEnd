import { createOrderDTO } from "../useCases/orderUseCase/createOrderUseCase/CreateOrderDTO";

export interface IOrdersRepository {
    lastOrder(): Promise<number>
    createOrder(order: createOrderDTO): Promise<any>
    showOrders(_idUser: string): Promise<any>
}