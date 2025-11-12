const express = require('express');
const {
    companyController,
    testimonialController,
    tutorialController,
    courseController,
    landingPageController,
    blogController,
    faqController,
    studentController
} = require('../../controllers');

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
router.get('/getCourseCurriculum/:courseId/:instituteId', courseController.getCourseCurriculum);

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
router.post("/whoWeAre", landingPageController.addWhoWeAre);
router.get("/getWhoWeAre/:id", landingPageController.getWhoWeAre);
router.post("/addWhyChooseUs", landingPageController.addWhyChooseUs);
router.get("/getWhyChooseUs/:id", landingPageController.getWhyChooseUs);
router.post("/addShapingSuccess", landingPageController.addShapingSuccess);
router.get("/getShapingSuccess/:id", landingPageController.getShapingSuccess);

//Blogs
router.post("/addBlogs", blogController.createBlogs);
router.get('/getBlogs/:id', blogController.getBlogs);
router.get('/getBlog/:id', blogController.getBlog);
router.patch('/editBlog/:id', blogController.updateBlog);
router.delete('/deleteBlog/:id', blogController.deleteBlog);

//faq
router.post("/addFaq", faqController.addFaq);
router.get("/getFaq/:id", faqController.getFaq);
router.delete("/deleteFaq/:id", faqController.deleteFaq);

//enquiries
router.get("/getEnquiries/:id", companyController.getEnquiries);
router.patch("/updateEnquiry/:id", companyController.updateEnquiry);

//students
router.post("/addStudent", studentController.createStudent);
router.get("/getStudents/:id", studentController.fetchStudents);
router.delete("/deleteStudent/:id", studentController.removeStudent);
router.get("/getStudent/:id", studentController.fetchStudent);
router.patch("/editStudentDetails/:id", studentController.editStudentDetails);

module.exports = router;