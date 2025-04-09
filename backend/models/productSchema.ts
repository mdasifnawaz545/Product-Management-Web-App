import mongoose, { Schema } from 'mongoose'

const productSchema: Schema<any> = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
    rating: {
        type: String,
    },
    imgURL: {
        type: String,
    },
    user: {
        type: String,
    }
});

const productModel = mongoose.model("ProductModel", productSchema);

export default productModel;