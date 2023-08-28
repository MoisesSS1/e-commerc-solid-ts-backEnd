import { mongoose } from "../conn"

const OrderSchema = new mongoose.Schema({
    number: Number,
    total: Number,
    infoItems: Object,
    adress: Object
})

const OrdersDB = mongoose.model("Order", OrderSchema)

export { OrdersDB }