const Users = require('../model/Auth');

const showUser = async (req, res, next) => {
    try {
		if (req.user) {
			const user = await Users.findById(req.user._id);
			return res.status(200).json({
				success: true,
				user,
			});
		}
	} catch (error) {
		next(error);
	}
}