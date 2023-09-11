import { IDelivery, IgetAdress } from "../IDelivery";

import { consultarCep } from "correios-brasil/dist";

export class CorreiosBrasil implements IDelivery {

    async getAdress(cep: string): Promise<IgetAdress> {
        const checkAdress: any = await consultarCep(cep)

        if (checkAdress.erro == "true") {

            throw new Error("Cep não encontrado!")
        }
        return checkAdress
    }

}