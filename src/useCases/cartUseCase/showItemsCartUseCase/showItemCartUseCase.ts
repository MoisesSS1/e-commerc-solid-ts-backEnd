import { ICartRepository } from "../../../repositories/ICartRepository";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IAuthUser } from "../../../services/auth/IAuthUser";

export class ShowItemCartUseCase {
  constructor(
    private cartRepository: ICartRepository,
    private authUser: IAuthUser,
    private userRepository: IUsersRepository,
    private productRepository: IProductRepository
  ) {

  }

  async execute(token: string) {
    const emailUser = await this.authUser.GetUserForToken(token)
    const findUser = await this.userRepository.findByEmail(emailUser)

    if (findUser._id) {
      const itemsCard = await this.cartRepository.showItemsCart(findUser._id)
      return itemsCard;
    }

    throw new Error("Adicione algum item no carrinho!")
  }

}
