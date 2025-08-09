const { CompanyInfoRepository, SocialLinksRepository } = require("../repositories");

const companyInfoRepository = new CompanyInfoRepository();
const socialLinksRepository = new SocialLinksRepository();

async function getInfo(id) {
    try {
        const info = await companyInfoRepository.findInstitute(id);
        return info;
    } catch (error) {
        console.log("error in companyInfoServices in getInfo:", error.message);
    }
}

async function updateInfo(id, data) {
    try {
        const updatedInfo = await companyInfoRepository.update(id, data);
        return updatedInfo;
    } catch (error) {
        console.log("error in companyInfoServices in updateInfo:", error.message);
    }
}

async function createSocialLinks(data) {
    try {
        const info = await socialLinksRepository.create(data);
        return info;
    } catch (error) {
        console.log("error in companyInfoServices in createSocialLinks:", error.message);
    }
}

module.exports = { getInfo, createSocialLinks, updateInfo }