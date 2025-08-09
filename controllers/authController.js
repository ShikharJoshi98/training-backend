const { NODE_ENV } = require("../config");
const { authServices } = require("../services");

//registration
async function registerInstitue(req, res) {
    try {
        const { instituteName, password, email, phone, altPhone, address } = req.body;
        if (!instituteName || !password || !email || !phone || !address) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const institute = await authServices.addInstitute({ instituteName, password, email, phone, altPhone, address });

        return res
            .status(200)
            .json({
                success: true,
                institute,
                message: "Institute Registered Successfully"
            });
    } catch (error) {
        if (error.statusCode === 409) {
            return res
                .status(409)
                .json({
                success: false,
                message: "Account for this Institute already exists. Try logging in."
            });
        }

        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
};

//login
async function login(req, res) {
    try {
        const { instituteName, password } = req.body;

        if (!instituteName || !password) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }
        const { institute, token } = await authServices.login({ instituteName, password });
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: NODE_ENV === "development",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res
            .status(200)
            .json({
                success: true,
                message: "Logged in successfully",
                institute
            });
    } catch (error) {
        if (error.statusCode === 409) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Invalid Credentials"
                });
        }

        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function logout(req,res) {
    try {
        res.clearCookie("token");
        return res
            .status(200)
            .json({
                success:true,
                message: "Logged out successfully"
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }    
}

async function checkAuth(req, res) {
    try {
        const { instituteName } = req;

        if (!instituteName) {
            return res
                .status(400)
                .json({
                    message: "Missing the institute Name while checking auth",
                    success: false
                });
        }

        const institute = await authServices.authChecker(instituteName);

        return res
            .status(200)
            .json({
                success: true,
                message:"Authentication Successful",
                institute,
                
        })

    } catch (error) {
        if (error.statusCode === 409) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Institute not found"
                });
        }

        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
    
}

module.exports = { registerInstitue, login, logout, checkAuth };