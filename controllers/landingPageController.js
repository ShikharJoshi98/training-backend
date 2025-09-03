const { LandingPageServices } = require("../services");

async function addHeroSection(req, res) {
    try {
        const { tagline,heading, subHeading, description, instituteId } = req.body;
        const heroSection = await LandingPageServices.createHeroSection({ tagline, heading, subHeading, description, instituteId });
        return res
            .status(200)
            .json({
                success: true,
                message: "Created HeroSection Successfully"
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

async function getHeroSection(req,res) {
    try {
        const heroSection = await LandingPageServices.fetchHeroSection(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched Hero Section Successfully",
                heroSection
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: true,
                message: error.message
            });
    }
}

async function addAboutUs(req,res) {
    try {
        const aboutUs = await LandingPageServices.createAboutUs(req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Added About Us Content Successfully"
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: true,
                message: error.message
            });
    }
}

async function getAboutUs(req, res) {
    try {
        const aboutUs = await LandingPageServices.fetchAboutUs(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched AboutUs Successfully",
                aboutUs
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: true,
                message: error.message
            });
    }
}

module.exports = {
    addHeroSection,
    getHeroSection,
    addAboutUs,
    getAboutUs
}