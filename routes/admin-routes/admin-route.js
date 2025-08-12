const express = require('express');
const { companyController, testimonialController, tutorialController, courseController } = require('../../controllers');

const router = express.Router();

//training-info
router.get('/getInstituteInfo/:id', companyController.getCompanyInfo);
router.get('/getSocialInfo/:id', companyController.getSocialLinks);
router.patch('/addSocialInfo/:id', companyController.addSocialLinks);
router.patch('/updateInstituteInfo/:id', companyController.updateInstitute);

//testimonial
router.post('/addTestimonial', testimonialController.addTestimonial);

//Tutorials
router.post('/addTutorial', tutorialController.addTutorial);
router.get('/getTutorials/:id', tutorialController.getTutorials);
router.post('/addTutorialSection', tutorialController.addSection);
router.get('/getTutorialSection/:id', tutorialController.getTutorialSection);
router.post('/addTutorialChapter', tutorialController.addTutorialChapter);
router.get('/getChapterInfo/:instituteId', tutorialController.getChapterInfo);
router.post('/addSubChapter/:id', tutorialController.updateSubChapters)

//Courses
router.post('/addCourse', courseController.addCourseDetails);
router.get('/getCourses/:id', courseController.getCourseDetails);
router.post('/addTopic', courseController.addCourseTopic);
router.get('/getTopicInfo/:instituteId', courseController.getTopicInfo);
router.post('/addSubTopic/:id', courseController.updateSubTopics);
router.patch('/selectTopCourse/:id', courseController.selectTopCourse);

//Upcoming Batches
router.post('/addUpcomingBatch', courseController.createUpcomingBatches);

module.exports = router;