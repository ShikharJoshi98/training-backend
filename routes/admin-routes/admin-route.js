const express = require('express');
const { companyController, testimonialController } = require('../../controllers');

const router = express.Router();

//training-info
router.post('/addCompanyInfo', companyController.addCompanyInfo);
router.post('/addSocialInfo', companyController.addSocialLinks);

//testimonial
router.post('/addTestimonial', testimonialController.addTestimonial);

module.exports = router;