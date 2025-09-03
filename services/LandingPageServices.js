const { HeroSectionRepository, AboutUsRepository } = require("../repositories");

const heroSectionRepository = new HeroSectionRepository();
const aboutUsRepository = new AboutUsRepository();

async function createHeroSection(data) {
    try {
        const heroSectionExist = await heroSectionRepository.getByType("instituteId", data.instituteId);

        if (heroSectionExist.length > 0) {
            const response = await heroSectionRepository.updateByType("instituteId", data, data.instituteId);
            return response;
        }
        else {
            const response = await heroSectionRepository.create(data);
            return response;
        }
    } catch (error) {
        console.log("error in heroSection in landingPageServices", error.message);
    }
}

async function fetchHeroSection(instituteId) {
    try {
        const response = await heroSectionRepository.getOne("instituteId", instituteId);
        return response;
    } catch (error) {
        console.error("Error in fetchHeroSection in landingpageservices",error.message);
    }
}

async function createAboutUs(data) {
    try {
        const aboutUsExist = await aboutUsRepository.getOne("instituteId", data.instituteId);
        if (aboutUsExist) {
            const response = await aboutUsRepository.updateByType("instituteId", data, data.instituteId);
            return response;
        }
        else {
            const response = await aboutUsRepository.create(data);
            return response;
        }
    } catch (error) {
        console.error("Error in createAboutUs in landing page services",error.message);
    }
}

async function fetchAboutUs(instituteId) {
    try {
        const response = await aboutUsRepository.getOne("instituteId", instituteId);
        return response;
    } catch (error) {
        console.error("Error in fetchHeroSection in landingpageservices",error.message);
    }
}

module.exports = {
    createHeroSection,
    fetchHeroSection,
    createAboutUs,
    fetchAboutUs
}