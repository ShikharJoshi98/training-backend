const { EnquiryRepository } = require("../repositories");

const enquiryRepository = new EnquiryRepository();

async function addEnquiry(data) {
    try {
        const response = await enquiryRepository.create(data);
        return response;
    } catch (error) {
        console.log("error in addEnquiry in enquiryservices",error.message);
    }
}

async function getEnquiries(id) {
    try {
        const response = await enquiryRepository.getByType("instituteId",id);
        return response;
    } catch (error) {
        console.log("error in getEnquiries in enquiryservices",error.message);
    }    
}

async function updateEnquiry(id,data) {
    try {
        const response = await enquiryRepository.update(id, data);
        return response;
    } catch (error) {
        console.log("error in updateEnquiry in enquiryservices",error.message);
    }
}

module.exports = {
    addEnquiry,
    getEnquiries,
    updateEnquiry
}