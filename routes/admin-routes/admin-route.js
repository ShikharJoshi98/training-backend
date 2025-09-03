const express = require('express');
const { companyController, testimonialController, tutorialController, courseController, landingPageController } = require('../../controllers');

const router = express.Router();

//training-info
router.get('/getInstituteInfo/:id', companyController.getCompanyInfo);
router.get('/getSocialInfo/:id', companyController.getSocialLinks);
router.patch('/addSocialInfo/:id', companyController.addSocialLinks);
router.patch('/updateInstituteInfo/:id', companyController.updateInstitute);

//testimonial
router.post('/addTestimonial/:id', testimonialController.addTestimonial);
router.get('/getTestimonials/:instituteId', testimonialController.getTestimonials);
router.get('/getTestimonial/:id', testimonialController.getTestimonial);
router.delete('/deleteTestimonial/:id', testimonialController.deleteTestimonial);
router.patch('/updateTestimonial/:id', testimonialController.updateTestimonial);

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
router.patch("/editSubChapter/:id", tutorialController.editSubChapter);
router.delete("/deleteSubChapter/:id", tutorialController.deleteSubChapter);

//Courses
router.post('/addCourseCategory', courseController.addCourseCategory);
router.get('/getCourseCategory/:id', courseController.fetchCourseCategory);
router.post('/addCourse', courseController.addCourseDetails);
router.get('/getCourses/:id', courseController.getCourseDetails);
router.get('/getCourse/:id', courseController.getCourse);
router.delete('/deleteCourse/:id', courseController.deleteCourse);
router.post('/addTopic', courseController.addCourseTopic);
router.get('/getTopicInfo/:instituteId', courseController.getTopicInfo);
router.patch('/editTopic/:id', courseController.editTopicInfo);
router.delete("/deleteTopic/:id", courseController.deleteTopic);
router.post('/addSubTopic/:id', courseController.updateSubTopics);
router.patch("/editSubTopic/:id", courseController.editSubTopic);
router.delete("/deleteSubTopic/:id", courseController.deleteSubTopic);
router.patch('/selectTopCourse/:id', courseController.selectTopCourse);
router.get('/getCourseCurriculum/:courseId/:instituteId',courseController.getCourseCurriculum);

//Upcoming Batches
router.post('/addUpcomingBatch/:id', courseController.createUpcomingBatches);
router.get('/getUpcomingBatches/:id', courseController.getUpcomingBatches);
router.delete('/deleteUpcomingBatches/:id', courseController.deleteUpcomingBatches);

//domain
router.post('/addDomain', companyController.createDomain);
router.get('/getDomain/:id', companyController.getDomain);
router.patch('/updateDomain/:id', companyController.updateDomain);

//edit Landing Page
router.post("/addHeroSection", landingPageController.addHeroSection);
router.get("/getHeroSection/:id", landingPageController.getHeroSection);
router.post("/addAboutUs", landingPageController.addAboutUs);
router.get("/getAboutUs/:id", landingPageController.getAboutUs);

module.exports = router;