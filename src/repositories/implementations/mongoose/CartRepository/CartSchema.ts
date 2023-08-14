import { mongoose } from "../conn"

const CartSchema = new mongoose.Schema({
    idUser: String,
    idProduct: String,
    qtd: Number
})

const CartDB = mongoose.model("Cart", CartSchema)

export { CartDB }