import mongooseTypes from "mongoose";
import { mongoose } from "../conn"

const CartSchema = new mongoose.Schema({
    idUser: String,
    idsProducts: [{
        idProduct: mongooseTypes.Types.ObjectId,
        qtd: Number,
        _id: false
    }],
})

const CartDB = mongoose.model("Cart", CartSchema)

export { CartDB }