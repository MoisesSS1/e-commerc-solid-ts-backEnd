import { IDelivery, IgetAdress } from "../IDelivery";

import { consultarCep } from "correios-brasil/dist";

export class CorreiosBrasil implements IDelivery {

    async getAdress(cep: string): Promise<IgetAdress> {
        const checkAdress: IgetAdress = await consultarCep(cep)

        return checkAdress
    }

}