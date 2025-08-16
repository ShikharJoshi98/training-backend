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
router.delete('/deleteTutorials/:id', tutorialController.deleteTutorial);
router.post('/addTutorialSection', tutorialController.addSection);
router.get('/getTutorialSection/:id', tutorialController.getTutorialSection);
router.post('/addTutorialChapter', tutorialController.addTutorialChapter);
router.get('/getChapterInfo/:instituteId', tutorialController.getChapterInfo);
router.patch('/editChapter/:id', tutorialController.editChapterInfo);
router.delete("/deleteChapter/:id", tutorialController.deleteChapter);
router.post('/addSubChapter/:id', tutorialController.updateSubChapters);
router.delete("/deleteSubChapter/:id", tutorialController.deleteSubChapter);

//Courses
router.post('/addCourse', courseController.addCourseDetails);
router.get('/getCourses/:id', courseController.getCourseDetails);
router.delete('/deleteCourse/:id', courseController.deleteCourse);
router.post('/addTopic', courseController.addCourseTopic);
router.get('/getTopicInfo/:instituteId', courseController.getTopicInfo);
router.patch('/editTopic/:id', courseController.editTopicInfo);
router.delete("/deleteTopic/:id", courseController.deleteTopic);
router.post('/addSubTopic/:id', courseController.updateSubTopics);
router.patch("/editSubTopic/:id", courseController.editSubTopic);
router.delete("/deleteSubTopic/:id", courseController.deleteSubTopic);
router.patch('/selectTopCourse/:id', courseController.selectTopCourse);

//Upcoming Batches
router.post('/addUpcomingBatch', courseController.createUpcomingBatches);
router.get('/getUpcomingBatches/:id', courseController.getUpcomingBatches);
router.delete('/deleteUpcomingBatches/:id', courseController.deleteUpcomingBatches);


module.exports = router;