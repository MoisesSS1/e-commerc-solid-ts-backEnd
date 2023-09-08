import { MongooseOrdersRepository } from "../../../repositories/implementations/mongoose/OrdersRepository/MongooseOrdersRepository";
import { AuthJWT } from "../../../services/auth/implementations/AuthJwt";
import { ShowOrdersUseCase } from "./ShowOrdersUseCase";
import { ShowOrdersUseController } from "./ShowOrdersUseController";

const auth = new AuthJWT()
const ordersDB = new MongooseOrdersRepository()
const showOrdersUseCase = new ShowOrdersUseCase(ordersDB)
const showOrdersUseController = new ShowOrdersUseController(showOrdersUseCase, auth)



export { showOrdersUseCase, showOrdersUseController }