
export interface IgetAdress {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    number?: number
}


export interface IDelivery {

    getAdress(cep: string): Promise<IgetAdress>

}