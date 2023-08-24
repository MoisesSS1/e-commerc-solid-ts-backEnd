import { CorreiosBrasil } from "../../../services/delivery/implementations/CorreiosBrasil";
import { GetAdressUseCase } from "./GetAdressUseCase";
import { GetAdressUseController } from "./GetAdressUseController";

const delivery = new CorreiosBrasil()
const getAdressUseCase = new GetAdressUseCase(delivery)
const getAdressUseController = new GetAdressUseController(getAdressUseCase)

export { delivery, getAdressUseController, getAdressUseCase }