import { MongooseOrdersRepository } from "../../../repositories/implementations/mongoose/OrdersRepository/MongooseOrdersRepository"
import { CreateOrderUseCase } from "./CreateOrderUseCase"
import { CreateOrderUseController } from "./CreateOrderUseController"

const ordersRepository = new MongooseOrdersRepository()
const createOrderUseCase = new CreateOrderUseCase(ordersRepository)
const createOrderUseController = new CreateOrderUseController(createOrderUseCase)

export { ordersRepository, createOrderUseCase, createOrderUseController }