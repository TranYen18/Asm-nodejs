import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);