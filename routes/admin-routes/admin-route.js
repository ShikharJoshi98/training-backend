const express = require('express');
const { companyController, testimonialController, tutorialController, authController } = require('../../controllers');

const router = express.Router();

//training-info
router.post('/addCompanyInfo', companyController.addCompanyInfo);
router.post('/addSocialInfo', companyController.addSocialLinks);

//testimonial
router.post('/addTestimonial', testimonialController.addTestimonial);

//Tutorials
router.post('/addTutorial', tutorialController.addTutorial);
router.post('/addTutorialSection', tutorialController.addSection);


module.exports = router;