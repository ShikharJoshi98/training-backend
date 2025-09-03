const { companyInfoServices, enquiryServices, courseServices } = require("../services");

async function getDomain(req,res) {
    try {
        const domain = await companyInfoServices.fetchDomain(req.query.host);

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

async function createEnquiry(req,res) {
    try {
        console.log(req.body.data)
        const enquiry = await enquiryServices.addEnquiry(req.body.data);

        return res
            .status(200)
            .json({
                success: true,
                message: "Added enquiry successfully",
                enquiry
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

async function getTopCourses(req,res) {
    try {
        const courses = await courseServices.getTopCourses(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "courses fetched successfully",
                courses
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
    getDomain,
    createEnquiry,
    getTopCourses
}