const { EnquiryRepository } = require("../repositories");

const enquiryRepository = new EnquiryRepository();

async function addEnquiry(data) {
    try {
        const response = await enquiryRepository.create(data);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    addEnquiry
}