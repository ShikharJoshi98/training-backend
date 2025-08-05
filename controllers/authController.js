const { authServices } = require("../services");

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
            return res.status(409).json({
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

module.exports = { registerInstitue };