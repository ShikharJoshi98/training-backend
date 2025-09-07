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

async function addWhoWeAre(req, res) {
    try {
        const whoWeAre = await LandingPageServices.createWhoWeAre(req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Added Who We Are Content Successfully"
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

async function getWhoWeAre(req, res) {
    try {
        const whoWeAre = await LandingPageServices.fetchWhoWeAre(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched WhoWeAre Successfully",
                whoWeAre
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

async function addWhyChooseUs(req,res) {
    try {
        const whyChooseUs = await LandingPageServices.createWhyChooseUs(req.body);
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

async function getWhyChooseUs(req, res) {
    try {
        const whyChooseUs = await LandingPageServices.fetchWhyChooseUs(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched AboutUs Successfully",
                whyChooseUs
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

async function addShapingSuccess(req,res) {
    try {
        const shapingSuccess = await LandingPageServices.createShapingSuccess(req.body);
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

async function getShapingSuccess(req, res) {
    try {
        const shapingSuccess = await LandingPageServices.fetchShapingSuccess(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched AboutUs Successfully",
                shapingSuccess
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
    getAboutUs,
    addWhoWeAre,
    getWhoWeAre,
    addWhyChooseUs,
    getWhyChooseUs,
    addShapingSuccess,
    getShapingSuccess
}