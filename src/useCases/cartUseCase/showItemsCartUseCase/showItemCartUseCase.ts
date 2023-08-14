import { ICartRepository } from "../../../repositories/ICartRepository";

export class ShowItemCartUseCase {
  constructor(
    private cartRepository: ICartRepository
  ) {

  }

  async execute(_idUser: string) {
    const findItemsDB = await this.cartRepository.showItemsCart(_idUser)
    return findItemsDB;
  }
}
