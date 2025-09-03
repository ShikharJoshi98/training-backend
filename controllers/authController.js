const { NODE_ENV } = require("../config");
const { authServices } = require("../services");

//registration
async function registerSuperAdmin(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const superAdmin = await authServices.addSuperAdmin({ username, password });
        return res
            .status(200)
            .json({
                success: true,
                message: "Added Super Admin",
                superAdmin
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
async function registerInstitue(req, res) {
    try {
        const { instituteName, username, password } = req.body;

        if (!instituteName || !username || !password) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const institute = await authServices.addInstitute({ instituteName, username, password });

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
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const { role } = await authServices.findUser(username);

        const { user, token } = await authServices.login({ username, password, role });

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
                user
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

async function logout(req, res) {
    try {
        res.clearCookie("token");
        return res
            .status(200)
            .json({
                success: true,
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
        const { username, role } = req;
        if (!username) {
            return res
                .status(400)
                .json({
                    message: "Missing the username while checking auth",
                    success: false
                });
        }

        const user = await authServices.authChecker({ role, username });

        return res
            .status(200)
            .json({
                success: true,
                message: "Authentication Successful",
                user,
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

module.exports = { registerInstitue, registerSuperAdmin, login, logout, checkAuth };