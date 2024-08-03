

 const validBodyRequest = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        const errors = error.errors.map(err => err.message);
        return res.status(400).json({
            message: "Invalid request data",
            errors,
        });
    }
};

module.exports = validBodyRequest