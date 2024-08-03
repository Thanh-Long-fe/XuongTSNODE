const Category = require('../model/Category');

const createCategory =  async (req, res, next) => {
    try {
        const data = await Category.create(req.body);
        if(data){
            res.status(200).json({
                success: true,
				data,
				message: "Tao thanh cong!",
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const getAllCategory = async (req, res, next) => {
	try {
		const data = await Category.find();
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Lay thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {createCategory, getAllCategory}