const { testimonialServices } = require("../services");

async function addTestimonial(req, res) {
    try {
        const { newJobRole, oldJobRole, studentImage, newCompany, testimonial, name } = req.body;
        const { id } = req.params;
       
        if (!name || !testimonial) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Missing required fields"
                })
        }

        const testimonialData = await testimonialServices.createTestimonial({ newJobRole, oldJobRole, studentImage, newCompany, testimonial, instituteId:id, name });

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

async function getTestimonials(req, res) {
    try {
        const testimonials = await testimonialServices.fetchTestimonials(req.params.instituteId);
        
        return res
            .status(200)
            .json({
                success: true,
                message: "fetched testimonials successfully",
                testimonials
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }    
}

async function getTestimonial(req, res) {
    try {
        const testimonial = await testimonialServices.fetchTestimonial(req.params.id);
        
        return res
            .status(200)
            .json({
                success: true,
                message: "fetched testimonials successfully",
                testimonial
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }    
}

async function updateTestimonial(req,res) {
    try {
        const testimonial = await testimonialServices.updateTestimonial(req.params.id, req.body.data);
        return res
            .status(200)
            .json({
                success: true,
                message: "Updated Successfully",
                testimonial
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

async function deleteTestimonial(req,res) {
    try {
        const testimonal = await testimonialServices.destroyTestimonial(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Deleted testimonial successfully",
                testimonal
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: error.message
            });
    }
}

module.exports = {
    addTestimonial,
    getTestimonials,
    getTestimonial,
    updateTestimonial,
    deleteTestimonial
}