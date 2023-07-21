interface Product {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string
}

export class ProductEntiti {
    _id
    name
    description
    price
    image

    constructor({ _id, name, description, price, image }: Product) {
        this._id = _id
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }


}