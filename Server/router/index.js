const productRouter = require('./products')
const authRouter = require('./auth')
const categoryRouter = require('./category')
function route(app){
    app.use('/api/products',productRouter);
    app.use('/api/user',authRouter);
   app.use('/api/category',categoryRouter);
   
}
module.exports = route;