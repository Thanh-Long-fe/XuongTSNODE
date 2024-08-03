const bcryptjs = require("bcryptjs");

 const hassPassword = (password) => {
	// const salt = bcryptjs.genSaltSync(10);
	return bcryptjs.hashSync(password, 10);
};

 const comparePassword = (password, hashPassword) => {
	return bcryptjs.compareSync(password, hashPassword);
};

module.exports = {hassPassword, comparePassword}