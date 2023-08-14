import { ShowItemCartUseCase } from "./showItemCartUseCase"
import { ShowCartUseController } from "./showItemCartUseController"

const showItemCartUseCase = new ShowItemCartUseCase()
const showCartUseController = new ShowCartUseController(showItemCartUseCase)

export { showCartUseController, showItemCartUseCase }