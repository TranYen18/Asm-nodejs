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
    },
    desc: {
        type: String,
        required: true,
        minlength: 5
    },
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);