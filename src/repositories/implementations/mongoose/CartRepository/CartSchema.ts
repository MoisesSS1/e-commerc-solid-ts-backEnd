import { mongoose } from "../conn"

const CartSchema = new mongoose.Schema({
    _idUser: String,
    _idProduct: String,
    qtd: Number
})

const CartDB = mongoose.model("Cart", CartSchema)

export { CartDB }