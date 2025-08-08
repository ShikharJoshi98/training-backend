const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function verifyToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res
            .status(400)
            .json({
                success: false,
                message: "Unauthorized - no token provided"
            });
    }

    try {
        const decode = jwt.verify(token, JWT_SECRET);

        if (!decode) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Unauthorized - invalid token"
                });
        }

        req.instituteName = decode.instituteName;

        next();

    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

module.exports = verifyToken;