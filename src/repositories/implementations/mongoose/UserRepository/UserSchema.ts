import { mongoose } from "../conn";

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
})


const UserDB = mongoose.model("User", UserSchema)

export { UserDB }