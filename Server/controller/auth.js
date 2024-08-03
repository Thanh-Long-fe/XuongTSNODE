const User = require('../model/Auth');
const { generateToken } = require('../utils/jwt');
const hass = require('../utils/pass')
const register = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const userExists = await User.findOne({email})
        if (userExists) {
           return res.status(400).json({
                message: "User already exists"
            })
        }
        const hassPassword = hass.hassPassword(password);
        if (!hassPassword) {
            return res.status(401).json({
                message: "Rejecting password"
            })
        }

        const data = await User.create(
          {
            email,
            password : hassPassword
          }
        )

        data.password = undefined;
        return res.status(200).json({
            success : true,
            message: "created successfully",
            data
        })


    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
try {
    const { email, password } = req.body;
    const useExists = await User.findOne({email})
    console.log(useExists);
    if (!useExists) {
        return res.status(400).json({
            message: "email already exists"
        })
    }
    const isMatch = hass.comparePassword(password, useExists.password);
    if (!isMatch) {
        return res.status(400).json({
            message: "Password does not match",
        });
    }


    const token = generateToken({ _id: useExists._id }, "100d");
		useExists.password = undefined; 

		return res.status(200).json({
			success: true,
			user: useExists,
			accessToken: token,
			message: "Login successfully!",
		});
} catch (error) {
    next(error);
}
}
module.exports = { login, register}