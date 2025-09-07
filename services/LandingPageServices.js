const { HeroSectionRepository, AboutUsRepository, WhoWeAreRepository, WhyChooseUsRepository, ShapingSuccessRepository } = require("../repositories");

const heroSectionRepository = new HeroSectionRepository();
const aboutUsRepository = new AboutUsRepository();
const whoWeAreRepository = new WhoWeAreRepository();
const whyChooseUsRepository = new WhyChooseUsRepository();
const shapingSuccessRepository = new ShapingSuccessRepository();

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

async function createWhoWeAre(data) {
    try {
        const whoWeAreExist = await whoWeAreRepository.getOne("instituteId", data.instituteId);
        if (whoWeAreExist) {
            const response = await whoWeAreRepository.updateByType("instituteId", data, data.instituteId);
            return response;
        }
        else {
            const response = await whoWeAreRepository.create(data);
            return response;
        }
    } catch (error) {
        console.error("Error in createWhoWeAre in landing page services",error.message);
    }
}

async function fetchWhoWeAre(instituteId) {
    try {
        const response = await whoWeAreRepository.getOne("instituteId", instituteId);
        return response;
    } catch (error) {
        console.error("Error in fetchWhoWeAre in landingpageservices",error.message);
    }
}

async function createWhyChooseUs(data) {
    try {
        const whyChooseUsExist = await whyChooseUsRepository.getOne("instituteId", data.instituteId);
        if (whyChooseUsExist) {
            const response = await whyChooseUsRepository.updateByType("instituteId", data, data.instituteId);
            return response;
        }
        else {
            const response = await whyChooseUsRepository.create(data);
            return response;
        }
    } catch (error) {
        console.error("Error in createWhyChooseUs in landing page services",error.message);
    }
}

async function fetchWhyChooseUs(instituteId) {
    try {
        const response = await whyChooseUsRepository.getOne("instituteId", instituteId);
        return response;
    } catch (error) {
        console.error("Error in fetchWhyChooseUs in landingpageservices",error.message);
    }
}

async function createShapingSuccess(data) {
    try {
        const shapingSuccessExist = await shapingSuccessRepository.getOne("instituteId", data.instituteId);
        if (shapingSuccessExist) {
            const response = await shapingSuccessRepository.updateByType("instituteId", data, data.instituteId);
            return response;
        }
        else {
            const response = await shapingSuccessRepository.create(data);
            return response;
        }
    } catch (error) {
        console.error("Error in createShapingSuccess in landing page services",error.message);
    }
}

async function fetchShapingSuccess(instituteId) {
    try {
        const response = await shapingSuccessRepository.getOne("instituteId", instituteId);
        return response;
    } catch (error) {
        console.error("Error in fetchShapingSuccess in landingpageservices",error.message);
    }
}

module.exports = {
    createHeroSection,
    fetchHeroSection,
    createAboutUs,
    fetchAboutUs,
    createWhoWeAre,
    fetchWhoWeAre,
    createWhyChooseUs,
    fetchWhyChooseUs,
    createShapingSuccess,
    fetchShapingSuccess
}