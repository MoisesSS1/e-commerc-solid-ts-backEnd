export interface IgetAdress {
    cep: string,
    logradouro: string,
    complemento: string | undefined,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string | undefined,
}

export interface IDelivery {

    getAdress(cep: string): Promise<IgetAdress>

}