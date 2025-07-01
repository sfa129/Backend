import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        productImage: {
            type: String
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        Category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, {timestamps: true}
);

export const Product = new mongoose.model("Product", productSchema);
