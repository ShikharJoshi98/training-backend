const { companyInfoServices } = require("../services");

//training-info
async function addCompanyInfo(req, res) {
    try {
        const { name, abbv, email, phone, altPhone, address } = req.body;

        if (!name || !abbv || !email || !phone || !address) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const companyInfo = await companyInfoServices.createInfo({ name, abbv, email, phone, altPhone, address });

        return res
            .status(200)
            .json({
                message: "Company info added Successfully",
                success: true,
                companyInfo
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            })
    }
}

//socialLinks
async function addSocialLinks(req, res) {
    try {
        const { facebook, linkedIn, Instagram, twitter, youtube } = req.body;

        const socialInfo = await companyInfoServices.createSocialLinks({ facebook, linkedIn, Instagram, twitter, youtube });

        return res
            .status(200)
            .json({
                success: true,
                message: "Successfully added Social Links",
                socialInfo
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message:error.message
        })
    }
}

module.exports = {
    addCompanyInfo,
    addSocialLinks
}