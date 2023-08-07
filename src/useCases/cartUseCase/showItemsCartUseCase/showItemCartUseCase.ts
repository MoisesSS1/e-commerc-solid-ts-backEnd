import { showCartDTO } from "./showCartDTO";

export class showItemCartUseCase {
  async execute() {
    const findItemsDB: showCartDTO[] = [
      {
        _id: "sasasa1",
        qtd: 3,
      },
      {
        _id: "sasasa1",
        qtd: 3,
      },
      {
        _id: "sasasa1",
        qtd: 3,
      },
    ];

    return findItemsDB;
  }
}
