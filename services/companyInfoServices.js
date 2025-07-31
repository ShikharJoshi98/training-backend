const {CompanyInfoRepository, SocialLinksRepository} = require("../repositories");

const companyInfoRepository = new CompanyInfoRepository();
const socialLinksRepository = new SocialLinksRepository();

async function createInfo(data) {
    try {
        const info = await companyInfoRepository.create(data);
        return info;
    } catch (error) {
        console.log("error in companyInfoServices in creatInfo:", error.message);
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

module.exports = {createInfo,createSocialLinks}