const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function generateTokenAndSetCookie(instituteName) {
   
    const token = jwt.sign({ instituteName }, JWT_SECRET, {
        expiresIn: "7d"
    });
    
    return token;
}

module.exports = generateTokenAndSetCookie;