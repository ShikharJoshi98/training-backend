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

async function createSocialLinks(instituteId,data,id) {
    try {
        const isInstitute = await socialLinksRepository.findInstitute(id);
        
        if (isInstitute) {
            const updateSocial = await socialLinksRepository.updateByType(instituteId, data, id);

            return updateSocial;
        }
        const addSocial = await socialLinksRepository.create(data);
        return addSocial;
        
    } catch (error) {
        console.log("error in companyInfoServices in createSocialLinks:", error.message);
    }
}

async function getSocialLinks(id) {
    try {
        const info = await socialLinksRepository.get(id);
        return info;
    } catch (error) {
        console.log("error in companyInfoServices in getSocialLinks:", error.message);
    }
}

module.exports = { getInfo, createSocialLinks, updateInfo, getSocialLinks }