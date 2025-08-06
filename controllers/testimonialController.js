const { testimonialServices } = require("../services");

async function addTestimonial(req, res) {
    try {
        const { newJobRole, oldJobRole, studentImage, newCompany, testimonial, name } = req.body;

        if (!name || !testimonial) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                })
        }

        const testimonialData = await testimonialServices.createTestimonial({ newJobRole, oldJobRole, studentImage, newCompany, testimonial, name });

        return res
            .status(200)
            .json({
                success: true,
                message: "Testimonial Added Successfully",
                testimonialData
            })

    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            })
    }
}

module.exports = { addTestimonial }