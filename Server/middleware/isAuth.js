const User = require('../model/Auth');
const {checkToken} = require('../utils/jwt');

const isAuth = async (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[0];
    if (!token) {
       return res.status(400).json({
            message: 'Invalid token'
        })
    }
    const decoded = checkToken(token)
    if (!decoded) {
        return res.status(401).json({
            message: 'False token'
        })
    }
    const user = await User.findById(decoded._id);
    req.user = user; 
    next()





} 
module.exports = isAuth;