const { companyInfoServices, enquiryServices } = require("../services");

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
        const { facebook, linkedIn, Instagram, twitter, youtube } = req.body;        
        const { id } = req.params;
        
        const socialInfo = await companyInfoServices.createSocialLinks({ facebook, linkedIn, Instagram, twitter, youtube },id);
        
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

//domain

async function createDomain(req,res) {
    try {
        const domain = await companyInfoServices.addDomain({ domainName: req.body.domainName, instituteId: req.body.instituteId });
        
        return res
            .status(200)
            .json({
                success: true,
                message: "Domain created successfully",
                domain
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

async function getDomain(req,res) {
    try {
        const domain = await companyInfoServices.getDomain(req.params.id);

        return res
            .status(200)
            .json({
                success: true,
                message: "Domain fetched successfully",
                domain
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

async function findDomain(req,res) {
    try {
        const domain = await companyInfoServices.fetchDomain(req.query.host);
        console.log("hit",req.query.host);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched all domains successfully",
                domain:domain[0]
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

async function updateDomain(req,res) {
    try {
        const domain = await companyInfoServices.updateDomain(req.params.id, { domainName: req.body.domainName });
        return res
            .status(200)
            .json({
                success: true,
                message: "Updated Domain name",
                domain
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

//getEnquiries

async function getEnquiries(req,res) {
    try {
        const enquiries = await enquiryServices.getEnquiries(req.params.id);
        return res
            .status(200)
            .json({
                enquiries,
                success: true,
                message: "Fetched enquiries successfully"
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

async function updateEnquiry(req,res) {
    try {
        const enquiry = await enquiryServices.updateEnquiry(req.params.id, { isContacted: true });
        return res
            .status(200)
            .json({
                success: true,
                message: "updated Successfully"
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

module.exports = {
    getCompanyInfo,
    addSocialLinks,
    updateInstitute,
    getSocialLinks,
    createDomain,
    getDomain,
    findDomain,
    updateDomain,
    getEnquiries,
    updateEnquiry
}