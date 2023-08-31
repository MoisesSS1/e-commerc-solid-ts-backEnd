import { MongooseCartRepository } from "../../../repositories/implementations/mongoose/CartRepository/MonooseCartRepository"
import { MongooseOrdersRepository } from "../../../repositories/implementations/mongoose/OrdersRepository/MongooseOrdersRepository"
import { AuthJWT } from "../../../services/auth/implementations/AuthJwt"
import { CreateOrderUseCase } from "./CreateOrderUseCase"
import { CreateOrderUseController } from "./CreateOrderUseController"

const ordersRepository = new MongooseOrdersRepository()
const cartRepository = new MongooseCartRepository()
const authUser = new AuthJWT()
const createOrderUseCase = new CreateOrderUseCase(ordersRepository, cartRepository)
const createOrderUseController = new CreateOrderUseController(createOrderUseCase, authUser)

export { ordersRepository, createOrderUseCase, createOrderUseController }