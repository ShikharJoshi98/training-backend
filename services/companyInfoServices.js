const { CompanyInfoRepository, SocialLinksRepository, DomainRepository } = require("../repositories");

const companyInfoRepository = new CompanyInfoRepository();
const socialLinksRepository = new SocialLinksRepository();
const domainRepository = new DomainRepository();

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

async function createSocialLinks(data,id) {
    try {
        const isInstitute = await socialLinksRepository.findInstitute(id);
        
        if (isInstitute) {
            const updateSocial = await socialLinksRepository.updateByType("instituteId", data, id);
            return updateSocial;
        }
        else {
            const addSocial = await socialLinksRepository.create({...data,instituteId:id});
            return addSocial;
        }

        return null;        
    } catch (error) {
        console.log("error in companyInfoServices in createSocialLinks:", error.message);
    }
}

async function getSocialLinks(id) {
    try {
        const info = await socialLinksRepository.getOne("instituteId",id);
        return info;
    } catch (error) {
        console.log("error in companyInfoServices in getSocialLinks:", error.message);
    }
}

//domainServices

async function addDomain(data) {
    try {
        const response = await domainRepository.create(data);
        return response;
    } catch (error) {
        console.log("error in companyInfoServices in addDomain:", error.message);
    }
}

async function getDomain(id) {
    try {
        const response = await domainRepository.getByType('instituteId', id);
        return response;
    } catch (error) {
        console.log("error in companyInfoServices in getDomain:", error.message);
    }
}

async function fetchDomain(data) {
    try {
        const response = await domainRepository.getByType('domainName',data);
        return response;
    } catch (error) {
        console.log("error in companyInfoServices in getAllDomains:", error.message);
    }    
}

async function updateDomain(id,data) {
    try {
        const response = await domainRepository.updateByType('instituteId', data, id);
        return response;
    } catch (error) {
        console.log("error in companyInfoServices in updateDomain:", error.message)
    }
}

module.exports = {
    getInfo,
    createSocialLinks,
    updateInfo,
    getSocialLinks,
    addDomain,
    getDomain,
    fetchDomain,
    updateDomain
}