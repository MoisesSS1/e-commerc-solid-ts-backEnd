import { mongoose } from "../conn"


const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String
})

const ProductDB = mongoose.model("Product", ProductSchema)

export { ProductDB }