import { IDelivery } from "../../../services/delivery/IDelivery";


export class GetAdressUseCase {

    constructor(
        private delivery: IDelivery
    ) {

    }

    async execute(cep: string) {
        const checkAdress = await this.delivery.getAdress(cep)
        return checkAdress
    }
}