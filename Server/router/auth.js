var express = require('express');
const userSchema = require('../validschema/auth')
const validBodyRequest  = require( "../middleware/validateBodyReq");
const authRouter = express.Router();
const method = require('../controller/auth')
const isUser = require('../middleware/isAuth')

authRouter.post('/register',validBodyRequest(userSchema),method.register);
authRouter.post('/login',validBodyRequest(userSchema),method.login);
authRouter.use('/',isUser)
module.exports = authRouter;