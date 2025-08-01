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

module.exports = { createTestimonial };