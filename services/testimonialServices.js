const { TestimonialRepository } = require("../repositories");

const testimonialRepository = new TestimonialRepository();

async function createTestimonial(data) {
    try {
        const response = await testimonialRepository.create(data);
        return response;
    } catch (error) {
        console.log("Error in createTestimonial in testimonal services", error.message);
    }
}

async function fetchTestimonials(instituteId) {
    try {
        const response = await testimonialRepository.getByType("instituteId", instituteId);
        return response;
    } catch (error) {
        console.log("Error in fetchTestimonial in testimonal services", error.message);
    }
}

async function fetchTestimonial(id) {
    try {
        const response = await testimonialRepository.get(id);
        return response;
    } catch (error) {
        console.log("Error in fetchTestimonial in testimonal services", error.message);
    }
}

async function updateTestimonial(id,data) {
    try {
        const response = await testimonialRepository.update(id, data);
        return response;
    } catch (error) {
        console.log("Error in updateTestimonial in testimonal services", error.message);
    }
}

async function destroyTestimonial(id) {
    try {
        const response = await testimonialRepository.destroy(id);
        return response;
    } catch (error) {
        console.log("Error in deleteTestimonials in testimonal services", error.message);
    }
}


module.exports = {
    createTestimonial,
    fetchTestimonials,
    fetchTestimonial,
    updateTestimonial,
    destroyTestimonial
};