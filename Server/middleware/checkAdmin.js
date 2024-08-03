const checkAdmin = async function (req, res, next) {
try {
    if (req.user.rule !== 'admin') {
        return res.status(403).json({
            message: 'Khong co quyen admin'
        })
       
    }
    
    next()
} catch (error) {
    return res.status(400).json(
        message = error.message || "Invalid admin"
    )
}
}

module.exports = checkAdmin