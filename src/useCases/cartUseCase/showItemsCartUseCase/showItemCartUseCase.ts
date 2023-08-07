import { ShowCartDTO } from "./showCartDTO";


export class ShowItemCartUseCase {
  async execute() {
    const findItemsDB: ShowCartDTO[] = [
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
