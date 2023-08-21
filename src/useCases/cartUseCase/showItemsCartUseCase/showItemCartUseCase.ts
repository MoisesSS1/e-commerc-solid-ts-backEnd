import { ICartRepository } from "../../../repositories/ICartRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IAuthUser } from "../../../services/auth/IAuthUser";

export class ShowItemCartUseCase {
  constructor(
    private cartRepository: ICartRepository,
    private authUser: IAuthUser,
    private userRepository: IUsersRepository,
  ) {

  }

  async execute(token: string) {

    const dataToken = await this.authUser.GetUserForToken(token)
    const findUser = await this.userRepository.findByEmail(dataToken.email)

    if (findUser._id) {
      const itemsCard = await this.cartRepository.showItemsCart(findUser._id)
      return itemsCard;
    }

    throw new Error("Adicione algum item no carrinho!")
  }

}
