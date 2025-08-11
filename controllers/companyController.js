const { companyInfoServices } = require("../services");

//training-info
async function getCompanyInfo(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const companyInfo = await companyInfoServices.getInfo(id);

        return res
            .status(200)
            .json({
                message: "Company info fetched Successfully",
                success: true,
                companyInfo
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function updateInstitute(req, res) {
    try {
        const data = {};
        if (req.body.phone) {
            data.phone = req.body.phone;
        };
        if (req.body.instituteName) {
            data.instituteName = req.body.instituteName;
        };
        if (req.body.abbv) {
            data.abbv = req.body.abbv;
        };
        if (req.body.logo) {
            data.logo = req.body.logo;
        };
        if (req.body.email) {
            data.email = req.body.email;
        };
        if (req.body.address) {
            data.address = req.body.address;
        };
        const { id } = req.params;
        
        if (!id || !data) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const updatedInstitute = await companyInfoServices.updateInfo(id, data);

        return res
            .status(200)
            .json({
                message: "Company info updated Successfully",
                success: true,
                updatedInstitute
            })
        
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

//socialLinks
async function addSocialLinks(req, res) {
    try {
        const { facebook, linkedIn, Instagram, twitter, youtube, instituteId } = req.body;
        const { id, } = req.params;
        console.log('hit')
        const socialInfo = await companyInfoServices.createSocialLinks("instituteId",{ facebook, linkedIn, Instagram, twitter, youtube, instituteId },id);

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
                message: error.message
            })
    }
}

async function getSocialLinks(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                });
        }

        const socialLinks = await companyInfoServices.getSocialLinks(id);

        return res
            .status(200)
            .json({
                message: "Company info fetched Successfully",
                success: true,
                socialLinks
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

module.exports = {
    getCompanyInfo,
    addSocialLinks,
    updateInstitute,
    getSocialLinks
}