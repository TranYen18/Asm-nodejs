import Product from "../models/product";

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không thêm được sản phẩm"

        })
    }
}
export const list = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy sản phẩm"

        })
    }
}

export const read = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const product = await Product.findOne(filter);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy sản phẩm"

        })
    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json(
            {
                message: " Đã xóa thành công",
                data: product

            }
        )
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy sản phẩm"

        })
    }
}

export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    const option = { new: true };

    try {
        console.log(123, doc);
        const product = await Product.findByIdAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi  không tìm thấy sản phẩm"

        })
    }
}

