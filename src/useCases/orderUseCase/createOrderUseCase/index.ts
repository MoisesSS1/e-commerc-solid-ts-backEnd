import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository"
import { MongooseOrdersRepository } from "../../../repositories/implementations/mongoose/OrdersRepository/MongooseOrdersRepository"
import { CreateOrderUseCase } from "./CreateOrderUseCase"
import { CreateOrderUseController } from "./CreateOrderUseController"

const ordersRepository = new MongooseOrdersRepository()
const cartRepository = new MongooseCartRepository()
const createOrderUseCase = new CreateOrderUseCase(ordersRepository, cartRepository)
const createOrderUseController = new CreateOrderUseController(createOrderUseCase)

export { ordersRepository, createOrderUseCase, createOrderUseController }