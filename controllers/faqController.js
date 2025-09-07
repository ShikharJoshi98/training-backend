const { faqServices } = require("../services");

async function addFaq(req,res) {
    try {
        const faq = await faqServices.createFaq(req.body);
        return res
            .status(200)
            .json({
                success: true,
                message: "Add Faqs"
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

async function getFaq(req,res) {
    try {
        const faq = await faqServices.getFaq(req.params.id);
        return res
            .status(200)
            .json({
                success: true,
                message: "Fetched FAQs successfully",
                faq
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

async function deleteFaq(req,res) {
    try {
        const faq = await faqServices.deleteFaq(req.params.id, req.body.question);
        return res
            .status(200)
            .json({
                success: true,
                message: "deleted FAQs successfully",
                faq
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
    addFaq,
    getFaq,
    deleteFaq
};