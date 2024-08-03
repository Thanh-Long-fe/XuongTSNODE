const Products = require('../model/Products');

const createProducts =  async (req, res, next) => {
    try {
        const data = await Products.create(req.body);
        if(data){
            res.status(200).json({
                success: true,
				data,
				message: "Tao san pham thanh cong!",
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const updateProductById =  async (req, res, next) => {
    try {
        const data = await Products.findByIdAndUpdate(req.params.id, req.body,{new : true});
        if(data){
            res.status(200).json({
                success: true,
				data,
				message: "Update san pham thanh cong!",
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const removeProductById = async (req, res, next) => {
	try {
		const data = await Products.findByIdAndDelete(req.params.id);
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Remove san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};
const getProductById = async (req, res, next) => {
	try {
		const data = await Products.findById(req.params.id);
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Remove san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};
const getAllProducts = async (req, res, next) => {
	try {
		const data = await Products.find();
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Lay san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};
module.exports = {getAllProducts,getProductById,createProducts,removeProductById,updateProductById}