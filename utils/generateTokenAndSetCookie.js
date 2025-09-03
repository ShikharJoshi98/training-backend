const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function generateTokenAndSetCookie(username,role) {
   
    const token = jwt.sign({ username,role }, JWT_SECRET, {
        expiresIn: "7d"
    });
    
    return token;
}

module.exports = generateTokenAndSetCookie;