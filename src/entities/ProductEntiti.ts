interface Product {
    _id?: string,
    name: string,
    description: string,
    price: number,
    image: string,
    category: string
}

export class ProductEntiti {
    _id
    name
    description
    price
    image
    category

    constructor({ _id, name, description, price, image, category }: Product) {

        if (!name || !description || !price || !image || !category) {
            throw new Error("Preencha as informações do produto corretamente!!")
        }
        this._id = _id
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.category = category
    }
}