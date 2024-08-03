const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const { JWT_SECRET } = process.env;

 const generateToken = (payload, expiresIn = "5d") => {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn });
};


const checkToken = (token) => {
return jwt.verify(token, JWT_SECRET);
};
module.exports = {generateToken,checkToken}
