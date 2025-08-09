const express = require('express');
const { companyController, testimonialController, tutorialController, courseController } = require('../../controllers');

const router = express.Router();

//training-info
router.get('/getInstituteInfo/:id', companyController.getCompanyInfo);
router.post('/addSocialInfo', companyController.addSocialLinks);
router.patch('/updateInstituteInfo/:id', companyController.updateInstitute);

//testimonial
router.post('/addTestimonial', testimonialController.addTestimonial);

//Tutorials
router.post('/addTutorial', tutorialController.addTutorial);
router.post('/addTutorialSection', tutorialController.addSection);
router.post('/addTutorialChapter', tutorialController.addTutorialChapter);
router.get('/getChapterInfo/:tutorialId/:instituteId', tutorialController.getChapterInfo);

//Courses
router.post('/addCourse', courseController.addCourseDetails);



module.exports = router;