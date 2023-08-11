import mongoose from "mongoose";

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://investmentmoises:${process.env.MONGODBATLAS_PASSWORD}@e-commerc.9f3fiym.mongodb.net/?retryWrites=true&w=majority`)
}

export { mongoose }