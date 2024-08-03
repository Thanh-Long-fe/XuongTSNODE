const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const routes = require('./router');
const db = require('./config/db');
db.connect();
const cors = require('cors');
// Middleware để phân tích body của request
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// parse application/json


// Định tuyến cơ bản
routes(app)
const errorNotFound = (req, res, next) => {
	const error = new Error(`Not found`);
	error.status = 404;
	next(error);
};

const errorCommon = (err, req, res, next) => {
	return res.status(err.status || 500).json({
		message: err.message || "Loi server",
	});
};

app.use(errorNotFound, errorCommon);

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});